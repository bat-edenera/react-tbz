import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import Toolbar from '../container/toolBar.js';
import {connect} from 'react-redux';

class Mydesign extends Component{
	render(){
		const {count,addFold,newPage} = this.props;
		const button = [{
			theme:true,
			text:'新建文件夹',
			ico:'ico-addbd',
			handle:addFold,
			c1:'',
			c2:''
		},
		{
			theme:true,
			text:'新建画布',
			ico:'ico-size',
			handle:newPage,
			c1:'',
			c2:''
		}]
		return (
			<div className="mydesign">
				<Statebar title="我的设计" subtitle="您可以通过模板编辑设计，保存后文件将出现在这里" count={count}/>
				<div className="common-page">
					<Toolbar button={button} search={true}/>
				</div>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.designCount
})
var mapProps = (dispatch)=>({
	addFold:()=>{
		console.log('add-file')
	},
	newPage:()=>{
		console.log('new-size')
	}
})

export default connect(mapState,mapProps)(Mydesign)
