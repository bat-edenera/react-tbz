import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import {connect} from 'react-redux';

class Shareme extends Component{
	render(){
		const {count} = this.props;
		return (
			<div className="shareme">
				<Statebar title="共享给我的设计" subtitle="您可以与共享人共同对设计进行编辑" count={count}/>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.shareCount
})

export default connect(mapState)(Shareme)
