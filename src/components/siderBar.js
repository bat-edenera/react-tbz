import React,{Component} from 'react';
import Nav from './sidebar/link.js';
import Userinfo from './sidebar/userinfo.js';
import Otherinfo from './sidebar/otherInfo.js';
import Copyright from './sidebar/copyRight.js';
export default class Siderbar extends Component{
	render(){
		return (
			<div className="siderbar">
				<Userinfo/>
				<ul className="navlist">
					<li><Nav url="/template/mydesign" ico="ico-design" title="我的设计" type="designCount"/></li>
					<li><Nav url="/template/mybought" ico="ico-bought" title="我购买的模板" type="boughtCount"/></li>
					<li><Nav url="/template/myel" ico="ico-el" title="我的素材" type="elCount"/></li>
					<li><Nav url="/template/myfav" ico="ico-fav" title="模板收藏夹" type="favCount"/></li>
					<li><Nav url="/template/shareme" ico="ico-share" title="共享给我的设计" type="shareCount"/></li>
					<li><Nav url="/template/trash" ico="ico-del" title="回收站" type="trashCount"/></li>
				</ul>
				<Otherinfo/>
				<Copyright/>
			</div>
		)
	}
}

