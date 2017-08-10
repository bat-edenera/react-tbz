import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import tbzColor from 'utils/tbzColor.js';
import {connect} from 'react-redux';
import {callColorModal} from 'action/action.js'

import CheckBranch from './header/checkBranch.js'
class Header extends Component{
	render(){
		return (
			<div className="header" style={{...tbzColor.styles.init}}>
				<div className="logo">
					<Link to="/template/home" target="_blank" className="tbzlogo">
						<i className="tbzico ico-logo"/>
					</Link>
					<CheckBranch/>
				</div>
				<div className="navbar">
					<Link to="/template/home" >开启设计</Link>
					<Link to="/template/list" >模板中心</Link>
					<Link to="/template/home" >专题</Link>
					<Link to="/template/home" >商户版</Link>
					<Link to="/template/home" >新手教程</Link>
					<Link to="/template/home" target="_blank">使用秘籍</Link>
				</div>
				<div className="right">
					<a href="javascript:;" onClick={this.props.showColor}><i className="tbzico ico-skin"/>风格</a>
				</div>
			</div>
		)
	}
}
var mapProps = (dispatch)=>({
	showColor:()=>{
		dispatch(callColorModal(true))
	}
})
export default connect(null,mapProps)(Header)
