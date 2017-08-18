import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import store from 'store/index.js';
import colorWrap from 'components/HOC/colorWrap.js'
class Nav extends Component{
	constructor(props){
		super(...arguments);
		this.listen = null;
		this.state = {
			count:store.getState().memberInfo[this.props.type],
		}
	}
	componentDidMount(){
		this.listen = store.subscribe(()=>{
			if(store.getState().memberInfo[this.props.type]!==this.state.count){
				this.setState({
					count:store.getState().memberInfo[this.props.type]
				})
			}
		})
	}
	componentWillUnmount(){
		this.listen();
	}
	render(){
		const {url,ico,title,color} = this.props;
		const {count} = this.state;
		return (
			<NavLink to={url} rel="nofollow" activeStyle={{color:color.bgColor,borderColor:color.bgColor,backgroundColor:color.underBg}}>
				<i className={"tbzico "+ico}/><span className="subtitle">{title}</span>
				<span className="count" style={{color:color.fontColor,backgroundColor:color.bgColor}}>{count}</span>
			</NavLink>
		)
	}
}
export default colorWrap(Nav)