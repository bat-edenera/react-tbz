import React,{Component} from 'react';
import {connect} from 'react-redux';
import Modalover from 'components/modal/modalOver.js';
import {changeColor,callColorModal,callColorPicker,closeColorPicker} from 'action/action.js';

class ColorModal extends Component{
	shouldComponentUpdate(props,state){
		return props.isDiy===false||(props.isDiy===true&&props.colorList.indexOf(props.themeColor)>-1)
	}
	//变色
	changeColor(isDiy,evt){
		if(evt.target.localName!=='li'){
			return
		}
		if(this.props.pickerShow){
			this.props.closeColorPicker();
		}
		var themeColor = evt.target.dataset.color;
		this.props.changeColor({
			themeColor,
			isDiy,
		})
	}
	//召唤colorPicker
	initColorPicker(evt){
		this.props.changeColor({
			isDiy:true
		})
		let rect = evt.target.getBoundingClientRect();
		this.props.callColorPicker({
			show:true,
			posX:rect.left-20,
			posY:rect.top+55,
		})
	}
	//关闭
	close(){
		if(this.props.pickerShow){
			this.props.closeColorPicker();
		}
		this.props.hide();
	}
	render(){
		const {colorList,themeColor,isDiy} = this.props;
		return (
			<div className="color-modal"> 
				<span className="close" onClick={this.close.bind(this)}><i className="tbzico ico-close1"/></span>
				<div className="title"><i className="tbzico ico-skin"/>皮肤颜色</div>
				<ul>
				{colorList.map((color)=>(
					<li key={color} className={color===themeColor&&!isDiy?'active':''} style={{backgroundColor:color}} data-color={color} onClick={this.changeColor.bind(this,false)}><i className="tbzico ico-ok"/></li>
				))}
					<li className={`diycolor ${isDiy?'active':''}`} onClick={this.initColorPicker.bind(this)}>
						<i className="tbzico ico-ok"/>
					</li>
				</ul>
			</div>
			)
	}
}
var mapState = (state,old)=>({
	themeColor:state.memberInfo.themeColor,
	colorList: state.pageMeta.colorList,
	isDiy:state.memberInfo.isDiy,
	pickerShow:state.modal.colorPicker.show,
})
var mapProps = (dispatch)=>({
	changeColor:(payload)=>{
		dispatch(changeColor(payload))
	},
	hide:()=>{
		dispatch(callColorModal(false))
	},
	callColorPicker:(payload)=>{
		dispatch(callColorPicker(payload))
	},
	closeColorPicker:()=>{
		dispatch(closeColorPicker())
	}
})
export default connect(mapState,mapProps)(ColorModal)