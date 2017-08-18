import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckBranch from './header/checkBranch.js'
import ChangeColor from './header/changeColor.js'
import colorWrap from 'components/HOC/colorWrap.js'

class Header extends Component{
	render(){
		const {bgColor:backgroundColor,fontColor:color} = this.props.color;
		return (
			<div className="header" style={{color,backgroundColor}}>
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
					<ChangeColor/>
				</div>
			</div>
		)
	}
}
export default colorWrap(Header)

