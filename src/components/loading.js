import React from 'react';
import colorWrap from 'components/HOC/colorWrap.js'
export default colorWrap(({color})=>{
	var styles = {
		wrap:{
			position:'absolute',
			width:'50px',
			height:'50px',
			top: 'calc(50% + 15px)',
    	left: 'calc(50% + 1.25rem)',
			transform:'rotate(45deg) scale(.5)'
		},
		ball:{
			background:color.bgColor,
			width:"25px",
			height:"25px",
			position:'absolute',
		},
		ball1:{
			left:0,
			top:0,
		},
		ball2:{
			left:'25px',
			top:0,
		},
		ball3:{
			left:0,
			top:'25px',
		},
		ball4:{
			left:'25px',
			top:'25px',
		},
	}
	return(
		<div>
			<div className="loading" style={styles.wrap}>
				<p className="animationTL" style={{...styles.ball,...styles.ball1}}></p>
				<p className="animationTR" style={{...styles.ball,...styles.ball2}}></p>
				<p className="animationBL" style={{...styles.ball,...styles.ball3}}></p>
				<p className="animationBR" style={{...styles.ball,...styles.ball4}}></p>
			</div>
		</div>
	)
})