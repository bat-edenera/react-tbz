import React,{Component} from 'react';
import Animate from 'rc-animate';
import {animation} from 'components/animation.js';
import {connect} from 'react-redux';
class File extends Component{
	constructor(){
		super();
		this.state = {
			show:false
		}
	}
	componentDidMount(){
		this.setState({show:true})
	}
	render(){
		const {thumbnail,title} = this.props.data.data;
		const _html = (<div className="card" style={{animationDelay:`${this.props.delay}ms`,}}>
			<img src={`http://www.tbz.cn/${thumbnail}`} />
			<div className="figration">{title||'未命名文件'}</div>
		</div>)
		return (<Animate component="" animation={{enter:animation.zoomIn}} transitionAppear={true}>
					{this.state.show?_html:null}
				</Animate>
		)
	}
}
export default connect()(File);