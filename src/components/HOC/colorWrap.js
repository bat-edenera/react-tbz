import React from 'react';
import store from 'store/index.js';
export default function(Comp){
	return class ColorComponent extends React.Component{
		constructor(props){
			super(props);
			this.listen = null
			this.state  = {
				color:store.getState().color
			}
		}
		componentDidMount(){
			this.listen = store.subscribe(()=>{
				if(store.getState().color!==this.state.color){
					this.setState({
						color:store.getState().color
					})
				}
			})
		}
		componentWillUnmount(){
			this.listen();
		}
		render(){
			return <Comp {...this.props} {...this.state} />
		}
	}
}

