const modal = {
	over:false,
	colorList:false,
	colorPicker:false,
	branch:false,
	user:false,
}
export default (state=modal,action)=>{
	switch(action.type){
		case 'OVER':
			return {...state,over:action.payload}
		case 'COLOR_LIST':
			return {...state,colorList:action.payload}
		case 'COLOR_PICKER':
			return {...state,colorPicker:action.payload}
		case 'BRANCH':
			return {...state,branch:action.payload}
		case 'USER':
			return {...state,user:action.payload}
		default:
			return state
	}
}