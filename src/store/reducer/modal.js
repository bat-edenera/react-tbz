const modal = {
	over:false,
	colorList:false,
	versionModal:false,
	colorPicker:{
		show:false,
		posX:0,
		posY:0
	},
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
		case 'CLOSE_COLOR_PICKER':
			return {...state,colorPicker:{...state.colorPicker,show:false}}
		case 'BRANCH':
			return {...state,branch:action.payload}
		case 'USER':
			return {...state,user:action.payload}
		case 'VERSION_MODAL':
			return {...state,...action.payload}
		case 'CLOSE_MODAL':
			return {...state,...action.payload}
		default:
			return state
	}
}