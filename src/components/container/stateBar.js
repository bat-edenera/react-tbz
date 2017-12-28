import React,{Component} from 'react';
import Animate from 'rc-animate';
import {animation} from 'components/animation.js';
class Statebar extends Component{
	constructor(){
		super();
		this.state = {
			show:false
		}
	}
	componentDidMount(){
		this.setState({show:true})
	}
	componentWillUnmount(){
		this.setState({show:false})
	}
	render(){
		const {title,count,subtitle} = this.props;
		const _html = (<div className="state-bar">
		<div className="title">{title}</div>
			<div className="subtitle">{
				`共${count}个文件 ${subtitle.length>0?'-':''}`}
				{subtitle.length>0&&(<span className="tip">&nbsp;&nbsp;{subtitle}</span>)}
			</div>
		</div>)
		return (<Animate component="" animation={{enter:animation.fadeInDown,leave:animation.fadeOutUp}} >
					{this.state.show?_html:null}
				</Animate>
		)
	}
}
export default Statebar
