import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Siderbar extends Component{
	render(){
		return (
			<div className="siderbar">
				<ul>
					<li><Link to="/template/mydesign">我的设计</Link></li>
					<li><Link to="/template/mybought">我购买的模板</Link></li>
					<li><Link to="/template/myel">我的素材</Link></li>
					<li><Link to="/template/myfav">模板收藏夹</Link></li>
					<li><Link to="/template/shareme">共享给我的设计</Link></li>
					<li><Link to="/template/trash">回收站</Link></li>
				</ul>
			</div>
		)
	}
}