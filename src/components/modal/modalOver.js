import React,{Component} from 'react';
import {connect} from 'react-redux';
import {closeModal} from 'action/action.js';
class Modalover extends Component{
	componentDidMount(){

	}
	render(){
		return (
			<div className="modalover" onClick={this.props.closeModal}></div>
		)
	}
}
var mapProps = (dispatch)=>({
	closeModal:()=>{
		dispatch(closeModal())
	}
})
export default connect(null,mapProps)(Modalover);