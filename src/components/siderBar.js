import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import tbzColor from 'utils/tbzColor.js'
export default class Siderbar extends Component{
	render(){
		return (
			<div className="siderbar">
				<ul className="navlist">
					<li><NavLink to="/template/mydesign" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-design"/><span>我的设计</span></NavLink></li>
					<li><NavLink to="/template/mybought" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-bought"/><span>我购买的模板</span></NavLink></li>
					<li><NavLink to="/template/myel" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-el"/><span>我的素材</span></NavLink></li>
					<li><NavLink to="/template/myfav" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-fav"/><span>模板收藏夹</span></NavLink></li>
					<li><NavLink to="/template/shareme" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-share"/><span>共享给我的设计</span></NavLink></li>
					<li><NavLink to="/template/trash" activeStyle={tbzColor.styles.activeLi}><i className="tbzico ico-del"/><span>回收站</span></NavLink></li>
				</ul>
			</div>
		)
	}
}
