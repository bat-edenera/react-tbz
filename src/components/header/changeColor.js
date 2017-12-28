import React,{Component} from 'react';
import {connect} from 'react-redux';
import {callColorModal} from 'action/action.js'

class ChangeColor extends Component{
	render(){
			return (
				<a href="javascript:;" onClick={this.props.showColor}><i className="tbzico ico-skin"/>风格</a>
			)
	}
}
var mapProps = (dispatch)=>({
	showColor:()=>{
		dispatch(callColorModal(true))
	}
})
export default connect(null,mapProps)(ChangeColor)