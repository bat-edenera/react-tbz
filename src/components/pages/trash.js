import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import Toolbar from '../container/toolBar.js';
import {connect} from 'react-redux';

class trash extends Component{
	render(){
		const {count,clearList} = this.props;
		const button = [{
			theme:false,
			text:'上传素材',
			ico:'ico-del',
			handle:clearList,
			c1:'#ff5d00',
			c2:'#cf4b00' //dark
		},
		]
		return (
			<div className="trash">
				<Statebar title="回收站" subtitle="文件超过30天将自动清除" count={count}/>
				<div className="common-page">
					<Toolbar button={button} search={true}/>
				</div>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.trashCount
})
var mapProps = (dispatch)=>({
	clearList:()=>{
		console.log('clear-all')
	}
})
export default connect(mapState,mapProps)(trash)