import React, { Component } from 'react';
import Header from 'components/header.js';
import Animate from 'rc-animate';
import {connect} from 'react-redux';
import 'animate.css'

import {animation} from './animation.js';
import Siderbar from 'components/siderBar.js';
import Container from 'components/container.js';

import ModalOver from 'components/modal/modalOver.js'
import ColorModal from 'components/modal/color.js';
import ColorPicker from 'components/modal/colorPicker.js';
import Version from 'components/modal/version.js';
import initColor from 'utils/initColor.js';
import 'assets/css/main.scss'
//初始化主题色
initColor();
class App extends Component {
	render(){
		return (
			<div className="app">
				<Header/>
				<Siderbar/>
				<Container/>
				<Animate component="" animation={{enter:animation.flipInX,leave:animation.bounceOut}}>
					{this.props.modalOver?<ModalOver/>:null}
				</Animate>
				<Animate component="" animation={{enter:animation.flipInX,leave:animation.bounceOut}}>
					{this.props.skinModal?<ColorModal/>:null}
				</Animate>
				<Animate component="" animation={{enter:animation.flipInX,leave:animation.bounceOut}}>
					{this.props.colorPickerModal?<ColorPicker/>:null}
				</Animate>
				<Animate component="" animation={{enter:animation.flipInX,leave:animation.bounceOut}}>
					{this.props.versionModal?<Version/>:null}
				</Animate>
			</div>
		)
	}
}
var mapState = (state)=>({
	modalOver:state.modal.over,
	versionModal:state.modal.versionModal,
	skinModal:state.modal.colorList,
	colorPickerModal:state.modal.colorPicker.show
})

export default connect(mapState)(App)
