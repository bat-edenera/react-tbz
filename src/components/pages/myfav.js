import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import {connect} from 'react-redux';

class Myfav extends Component{
	render(){
		const {count} = this.props;
		return (
			<div className="myfav">
				<Statebar title="模板收藏夹" subtitle="" count={count}/>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.favCount
})

export default connect(mapState)(Myfav)
