import React from 'react';
import {connect} from 'react-redux';

const WaterfallItem = ({width,height,top,left,data,cell:Card,delay})=>{
	const styles = {
		width:`${width}px`,
		height:`${height}px`,
		top:`${top}px`,
		left:`${left}px`,
	}
	return (
		<div style={styles} className="waterfall-item">
			<Card data={data} delay={delay}/>
		</div>
	)
}
export default connect()(WaterfallItem)
