import React,{Component} from 'react';
import {connect} from 'react-redux'
import {queryPageData} from 'action/asyncAction.js';
import Loading from 'components/loading.js';
import Waterfall from 'utils/waterfall.js'
class Content extends Component{
	constructor(props){
		super(props);
		this.state = {
			width:0
		}
	}
	componentWillMount(){
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
	render(){
		const {pageState} = this.props;
		if(pageState==='loading'||pageState==="unload"){
			return <Loading/>
		}else{
			return (
				<div ref="waterfall" className="waterfall">
					{this.state.width>0&&<Waterfall width={this.state.width} source={this.props.fileData}/>}
				</div>
			)
		}
	}
}
var mapState = (state)=>({
	pageState : state.pageMeta.pageState,
	source:state.pageMeta.source,
	foldData:state.pageMeta.source.filter((item)=>{
		return item.isFolder===1
	}),
	fileData:state.pageMeta.source.filter((item)=>{
		return item.isFolder===0
	}),
})
var mapProps = (dispatch)=>({
	initData:()=>{
		dispatch(queryPageData())
	}
})
export default connect(mapState,mapProps)(Content)