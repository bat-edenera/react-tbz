import React,{Component} from 'react';
import {connect} from 'react-redux';
import Modalover from 'components/modal/modalOver.js';
import {changeColor} from 'action/action.js';
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
	render(){
		const {show} = this.props;
		return show?(
			<div className="color-modal">
				<span className="close"><i className="tbzico ico-close1"/></span>
				<div className="title"><i className="tbzico ico-skin"/>皮肤颜色</div>
				<ul>
				{colorList.map((color)=>(
					<li key={color} style={{backgroundColor:color}} data-color={color} onClick={this.changeColor}><i className="tbzico ico-ok"/></li>
				))}
				</ul>
			</div>
		):null
	}
}
var mapState = (state)=>({
	show:state.modal.colorList
})
var mapProps = (dispatch)=>({
	changeColor:(payload)=>{
		dispatch(changeColor(payload))
	}
})
var colorList = ['#00a2eb','#e56281','#3a56a5','#2faf4b'];
export default connect(mapState,mapProps)(ColorModal)