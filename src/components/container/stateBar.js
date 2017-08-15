import React from 'react';
var Statebar = (props)=>{
	const {title,count,subtitle} = props;
	return (
		<div className="state-bar">
			<div className="title">{title}</div>
			<div className="subtitle">{
				`共${count}个文件 ${subtitle.length>0?'-':''}`}
				{subtitle.length>0&&(<span className="tip">&nbsp;&nbsp;{subtitle}</span>)}
			</div>
		</div>
	)
}
export default Statebar
