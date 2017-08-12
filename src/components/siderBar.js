import React,{Component} from 'react';
import Nav from './sidebar/link.js';
export default class Siderbar extends Component{
	render(){
		return (
			<div className="siderbar">
				<ul className="navlist">
					<li><Nav url="/template/mydesign" ico="ico-design" title="我的设计"/></li>
					<li><Nav url="/template/mybought" ico="ico-bought" title="我购买的模板"/></li>
					<li><Nav url="/template/myel" ico="ico-el" title="我的素材"/></li>
					<li><Nav url="/template/myfav" ico="ico-fav" title="模板收藏夹"/></li>
					<li><Nav url="/template/shareme" ico="ico-share" title="共享给我的设计"/></li>
					<li><Nav url="/template/trash" ico="ico-del" title="回收站"/></li>
				</ul>
			</div>
		)
	}
}

