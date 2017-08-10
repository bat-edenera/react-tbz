import React, { Component } from 'react';

import Header from 'components/header.js';
import Siderbar from 'components/siderBar.js';
import Container from 'components/container.js';
import ColorModal from 'components/modal/color.js';
import 'assets/css/main.scss'

export default class App extends Component {
	render(){
		return (
			<div className="app">
				<Header/>
				<Siderbar/>
				<Container/>
				<ColorModal/>
			</div>
		)
	}
}

