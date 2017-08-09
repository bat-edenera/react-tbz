import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Tplcenter from './pages/tplCenter.js';
import Tpllist from './pages/tplList.js';
import Mydesign from './pages/mydesign.js';
import Mybought from './pages/mybought.js';
import Myel from './pages/myel.js';
import Myfav from './pages/myfav.js';
import Shareme from './pages/shareme.js';
import Trash from './pages/trash.js';

export default class Container extends Component{
	render(){
		return (
			<div className="container">
				<Route exact path="/template" component={Tplcenter}/>
				<Route path="/template/home" component={Tplcenter}/>
				<Route path="/template/list" component={Tpllist}/>
				<Route path="/template/mydesign" component={Mydesign}/>
				<Route path="/template/mybought" component={Mybought}/>
				<Route path="/template/myfav" component={Myfav}/>
				<Route path="/template/myel" component={Myel}/>
				<Route path="/template/shareme" component={Shareme}/>
				<Route path="/template/trash" component={Trash}/>
			</div>
		)
	}
}