import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import {connect} from 'react-redux';

class Mybought extends Component{
	render(){
		const {count} = this.props;
		return (
			<div className="mybought">
				<Statebar title="我购买的模板" subtitle="付费过的模板将永久免费使用" count={count}/>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.boughtCount
})

export default connect(mapState)(Mybought)