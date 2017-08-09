import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from 'store/index.js';
import App from 'components/index.js';
import Intro from 'components/intro.js';
import 'libs/reset.css'

ReactDOM.render(
	<Provider store={store}>
	<Router>
		<div>
			<Route exact path="/" component={Intro}/>
			<Route path="/template" component={App}/>
		</div>
	</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
