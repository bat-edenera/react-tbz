import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from 'store/index.js';
class Otherinfo extends Component{
	constructor(props){
		super(...arguments);
		this.state = {
			color:store.getState().color
		}
	}
	componentDidMount(){
		store.subscribe((a,b)=>{
			this.setState({
				color:store.getState().color
			})
		})
	}
	render(){
		const {cloudCount,cloud,foldCount,fold} = this.props;
		const color = this.state.color;
		return(
			<div className="other-info">
				<ul>
					<li>
						<i className="tbzico ico-fold"/>
						<span>{`文件夹(${foldCount}个/${fold}个)`}</span>
						<div className="slide">
							<span style={{width:`${foldCount*100/fold}%`,backgroundColor:color.bgColor}}></span>
						</div>
					</li>
					<li>
						<i className="tbzico ico-disk"/>
						<span>{`存储空间(${cloudCount}M/${cloud}M)`}</span>
						<div className="slide">
							<span style={{width:`${cloudCount*100/cloud}%`,backgroundColor:color.bgColor}}></span>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
var mapState = (state)=>({
	cloudCount:state.memberInfo.cloudCount,
	cloud:state.memberInfo.cloud,
	foldCount:state.memberInfo.foldCount,
	fold:state.memberInfo.fold,
})
export default connect(mapState)(Otherinfo)