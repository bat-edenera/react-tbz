import React, { Component } from 'react';
import {connect} from 'react-redux';

import tbzColor from 'utils/tbzColor.js';
import {checkLog,changeColor} from 'action/action.js';

import Header from 'components/header.js';
import Siderbar from 'components/siderBar.js';
import Container from 'components/container.js'

class App extends Component {
	constructor(props){
		super(...arguments);
		this.changeColor = this.changeColor.bind(this);
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = ()=>{
		// console.log('handle',this.props)
	}
	changeColor = ()=>{
		var color =  "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
		// var color = this.refs.color.value;
		this.props.changeColor(color)
	}
	render(){
		const {loginState} = this.props
		return (
			<div className="app">
				<Header/>
				<Siderbar/>
				<Container/>
				<p onClick={this.props.checkLog}>{loginState?'已登录':'未登录'}</p>
				<p style={{color:tbzColor.bgColor}}>测试颜色</p>
				<p style={{color:tbzColor.bgDark}}>测试深颜色</p>
				<button onClick={this.changeColor}>改变颜色</button>
			</div>
		)
	}
}
var mapState = (state)=>({
	loginState:state.loginState,
	themeColor:state.themeColor
})
var mapDispatch = (dispatch)=>({
	changeColor:(color)=>{
		dispatch(changeColor(color))
	},
	checkLog:()=>{
		dispatch(checkLog())
	}
})
export default connect(mapState,mapDispatch)(App);
