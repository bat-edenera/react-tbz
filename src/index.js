import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from 'store/index.js';
import App from 'components/index.js';
import Intro from 'components/intro.js';
import 'assets/css/reset.css'
import 'assets/css/tbzico.css'

ReactDOM.render(
	<Provider store={store}>
	<Router>
		<div>
			<Route exact path="/" component={Intro}/>
			<Route exact path="/index" component={Intro}/>
			<Route path="/template" component={App}/>
		</div>
	</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
