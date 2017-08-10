import React,{Component} from 'react';
import {connect} from 'react-redux';
import Modalover from 'components/modal/modalOver.js';
import {callModalOver} from 'action/action.js';
class ColorModal extends Component{
	render(){
		const {show} = this.props;
		console.log(show)
		if(show){
			return(
				<div className="color-modal">
					<Modalover/>
				</div>
			)
		}else{
			return null
		}
	}
}
var mapState = (state)=>({
	show:state.modal.colorList
})
export default connect(mapState)(ColorModal)