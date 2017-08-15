import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import store from 'store/index.js';

class Nav extends Component{
	constructor(props){
		super(...arguments);
		var type = this.props.type
		this.state = {
			color:store.getState().color,
			count:store.getState().memberInfo[type]
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
		const {color,count} = this.state;
		return (
			<NavLink to={url} rel="nofollow" activeStyle={{color:color.bgColor,borderColor:color.bgColor,backgroundColor:color.underBg}}>
				<i className={"tbzico "+ico}/><span className="subtitle">{title}</span>
				<span className="count" style={{color:color.fontColor,backgroundColor:color.bgColor}}>{count}</span>
			</NavLink>
		)
	}
}
export default Nav