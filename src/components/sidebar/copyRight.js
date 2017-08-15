import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Copyright extends Component{
	render(){
		return(
			<div className="copy-right">
				<i className="tbzico ico-logo2"/>
				<p>
					轻量级平面设计工具<br/>
					Copyright&nbsp;&nbsp;©&nbsp;2017&nbsp;&nbsp;&nbsp;tubangzhu.com<br/>
					鲁ICP备14013361号-8
				</p>
			</div>
		)
	}
}
export default Copyright