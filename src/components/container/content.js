import React,{Component} from 'react';
import {connect} from 'react-redux'
import {queryPageData} from 'action/asyncAction.js';
import Loading from 'components/loading.js';
import Waterfall from 'utils/waterfall.js'
import File from 'components/container/file.js';
import Fold from 'components/container/fold.js';
class Content extends Component{
	constructor(props){
		super(props);
		this.state = {
			width:0
		}
		this.resize = this._resize.bind(this);
	}
	_resize(e){
		if(this.refs.waterfall){
			var width = this.refs.waterfall.offsetWidth;
			if(this.state.width!==width){
				this.setState({width})
			}
		}
	}
	componentWillMount(){
		if(this.props.pageState!=='loaded')
		this.props.initData()
	}
	componentDidUpdate(){
		var dom = this.refs.waterfall;
		if(dom&&dom.offsetWidth!==this.state.width){
			this.setState({
				width:dom.offsetWidth
			})
		}
	}
	componentDidMount(){
		var dom = this.refs.waterfall;
		if(dom&&dom.offsetWidth!==this.state.width){
			this.setState({
				width:dom.offsetWidth
			})
		}
		window.addEventListener('resize',this.resize)
	}
	componentWillUnmount(){
		window.removeEventListener('resize',this.resize)
	}
	render(){
		const {pageState} = this.props;
		if(pageState==='loading'||pageState==="unload"){
			return <Loading/>
		}else{
			return (
				<div ref="waterfall" className="waterfall">
					{this.state.width>0&&
						<div>
						<Waterfall width={this.state.width} source={this.props.foldData} fixHeight={38} cell={Fold}/>
						<Waterfall width={this.state.width} source={this.props.fileData} cell={File}/>
						</div>
					}
				</div>
			)
		}
	}
}
var mapState = (state)=>({
	pageState : state.pageMeta.pageState,
	foldData:state.pageMeta.foldData,
	fileData:state.pageMeta.fileData,
})
var mapProps = (dispatch)=>({
	initData:()=>{
		dispatch(queryPageData())
	}
})
export default connect(mapState,mapProps)(Content)