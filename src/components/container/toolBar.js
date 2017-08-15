import React from 'react';
import Button from './button.js';
var Toolbar = (props)=>{
	const {button,search} = props;
	return(
		<div className="toolbar">
			<div className="left">
			{button.map(({text,ico,handle,theme,c1,c2})=>
				<Button key={text} text={text} ico={ico} handle={handle} theme={theme} c1={c1} c2={c2}/>
			)}
			</div>
			<div className="right"></div>
		</div>
	)
}
export default Toolbar