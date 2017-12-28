import * as actionType from 'action/actionType.js'
const meta = {
	colorList:['#00a2eb','#288add','#31a66b','#da434e','#e56281','#b1639f','#6b51c0','#595ca0','#3074c1','#00829a','#159c77','#4fb0ac','#7ac5c4','#9bb7d6','#804d4d','#f0bc59','#cfbaaa'],
	pageState:'unload',
	fileData:[],
	foldData:[],
	sort:'time',
	pageType:'grid',
	folder:0
}
export default (state = meta,action)=>{
	switch(action.type){
		case actionType.PAGE_STATE:
		 return {...state,pageState:action.payload}
		case actionType.SOURCE:
			return {...state,
				fileData:state.fileData.concat(action.payload.fileData),
				foldData:state.foldData.concat(action.payload.foldData),
				pageState:'loaded'}
		default:
			return state
	}
}