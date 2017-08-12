import React,{Component} from 'react';
import {connect} from 'react-redux';
import Modalover from 'components/modal/modalOver.js';
import {changeColor,callColorModal} from 'action/action.js';

class ColorModal extends Component{
	constructor(props){
		super(...arguments);
		this.changeColor = this.changeColor.bind(this);
	}
	changeColor = (evt)=>{
		var themeColor = evt.target.dataset.color;
		this.props.changeColor({
			themeColor,
			isDiy:false,
		})
	}
	hehe(){
		console.log('heheh')//解决模态关闭
	}
	render(){
		const {show} = this.props;
		return (
			<div className="color-modal" style={{display:show?'block':'none'}} onClick={this.hehe.bind(this)}>
				<span className="close" onClick={this.props.hide}><i className="tbzico ico-close1"/></span>
				<div className="title"><i className="tbzico ico-skin"/>皮肤颜色</div>
				<ul>
				{colorList.map((color)=>(
					<li key={color} style={{backgroundColor:color}} data-color={color} onClick={this.changeColor}><i className="tbzico ico-ok"/></li>
				))}
				</ul>
			</div>
		)
	}
}
// var mapState = (state)=>({
// 	show:state.modal.colorList
// })
var mapProps = (dispatch)=>({
	changeColor:(payload)=>{
		dispatch(changeColor(payload))
	},
	hide:()=>{
		dispatch(callColorModal(false))
	}
})
var colorList = ['#00a2eb','#e56281','#3a56a5','#2faf4b'];
export default connect(null,mapProps)(ColorModal)