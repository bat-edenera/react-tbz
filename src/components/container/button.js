import React from 'react';
import {connect} from 'react-redux';
var Button = (props)=>{
	const {text,ico,handle,color,theme,c1,c2} = props;
	return (
		<div className="ui_button" style={{backgroundColor:theme?color.bgColor:c1}} onClick={handle}>
			<span className="ico" style={{backgroundColor:theme?color.darkColor:c2}}>
				<i className={"tbzico "+ico}/>
			</span>
			<span className="title">{text}</span>
		</div>
	)
}
var mapState = (state)=>({
	color:state.color
})
export default connect(mapState)(Button)