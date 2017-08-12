import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import store from 'store/index.js';

class Nav extends Component{
	constructor(props){
		super(...arguments);
		this.state = {
			color:store.getState().color
		}
	}
	componentDidMount(){
		store.subscribe((a,b)=>{
			this.setState({
				color:store.getState().color
			})
		})
	}
	render(){
		const {url,ico,title} = this.props;
		const color = this.state.color;
		return (
			<NavLink to={url} activeStyle={{color:color.bgColor,borderColor:color.bgColor,backgroundColor:color.underBg}}><i className={"tbzico "+ico}/><span>{title}</span></NavLink>
		)
	}
}
export default Nav