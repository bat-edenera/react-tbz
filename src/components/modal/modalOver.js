import React,{Component} from 'react';
import {connect} from 'react-redux';
class Modalover extends Component{
	render(){
		const {show} = this.props;
		return show?(
			<div className="modalover"></div>
		):null;
	}
}
var mapState = (state)=>({
	show:state.modal.over
})
export default connect(mapState)(Modalover);