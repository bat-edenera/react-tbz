import * as actionType from 'action/actionType.js'
const meta = {
	colorList:['#00a2eb','#288add','#31a66b','#da434e','#e56281','#b1639f','#6b51c0','#595ca0','#3074c1','#00829a','#159c77','#4fb0ac','#7ac5c4','#9bb7d6','#804d4d','#f0bc59','#cfbaaa'],
	pageState:'unload',
	source:[],
	sort:'time',
	pageType:'grid'
}
export default (state = meta,action)=>{
	switch(action.type){
		case actionType.PAGE_STATE:
		 return {...state,pageState:action.payload}
		case actionType.SOURCE:
			return {...state,source:state.source.concat(action.payload.source),pageState:action.payload.pageState}
		default:
			return state
	}
}