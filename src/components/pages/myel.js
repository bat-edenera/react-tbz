import React,{Component} from 'react';
import Statebar from '../container/stateBar.js';
import Toolbar from '../container/toolBar.js';
import {connect} from 'react-redux';

class Myel extends Component{
	render(){
		const {count,upload} = this.props;
		const button = [{
			theme:false,
			text:'上传素材',
			ico:'ico-upload',
			handle:upload,
			c1:'#00aa70',
			c2:'#00935a' //dark
		},
		]
		return (
			<div className="mybought">
				<Statebar title="我的素材" subtitle="支持上传jpg、png格式图片，上传大小限制10MB" count={count}/>
				<div className="common-page">
					<Toolbar button={button} search={true}/>
				</div>
			</div>
		)
	}
}
var mapState = (state)=>({
	count:state.memberInfo.elCount
})
var mapProps = (dispatch)=>({
	upload:()=>{
		console.log('upload')
	}
})

export default connect(mapState,mapProps)(Myel)
