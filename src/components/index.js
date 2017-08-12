import React, { Component } from 'react';
import Header from 'components/header.js';
import Animate from 'rc-animate';
import {connect} from 'react-redux';

import Siderbar from 'components/siderBar.js';
import Container from 'components/container.js';
import ColorModal from 'components/modal/color.js';
import initColor from 'utils/initColor.js';
import 'assets/css/main.scss'
import 'assets/css/transition.css'
//初始化主题色
initColor();
class App extends Component {
	render(){
		return (
			<div className="app">
				<Header/>
				<Siderbar/>
				<Container/>
				<Animate
					component=""
          showProp="show"
          transitionName="fadeUp"
        >
        	<ColorModal show={this.props.show}/>
        </Animate>
			</div>
		)
	}
}
var mapState = (state)=>({
	show:state.modal.colorList
})

export default connect(mapState)(App)
