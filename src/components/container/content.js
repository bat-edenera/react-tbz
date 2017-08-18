import React,{Component} from 'react';
import {connect} from 'react-redux'
import {queryPageData} from 'action/asyncAction.js';
import Loading from 'components/loading.js';
class Content extends Component{
	componentWillMount(){
		this.props.initData()
	}
	copy(evt){
		console.log(evt.clipboardData,evt.DOMDataTransfer,evt.nativeEvent)
	}
	render(){
		const {pageState} = this.props;
		if(pageState==='loading'){
			return <Loading/>
		}else{
			return <div onCopy={this.copy.bind(this)}>wubo</div>
		}
	}
}
var mapState = (state)=>({
	pageState : state.pageMeta.pageState,
	foldData:state.pageMeta.source.filter((item)=>{
		return item.isFolder===1
	}),
	fileData:state.pageMeta.source.filter((item)=>{
		return item.isFolder===0
	}),
})
var mapProps = (dispatch)=>({
	initData:()=>{
		dispatch(queryPageData())
	}
})
export default connect(mapState,mapProps)(Content)