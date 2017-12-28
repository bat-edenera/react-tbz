const memberInfo ={
	userName:'edenera',
	coin:300,
	themeColor:'#00a2eb',
	isDiy:false,
	designCount:10,
	favCount:8,
	shareCount:6,
	boughtCount:0,
	trashCount:3,
	elCount:5,
	foldCount:5,
	cloudCount:180,
	fold:10,
	cloud:500,
}
export default (state=memberInfo,action)=>{
	switch (action.type){
		case 'CHANGE_COLOR':
			return {...state,...action.payload}
		case 'CHANGE_NAME':
			return {...state,userName:action.payload}
		case 'DESIGN_COUNT':
			return {...state,designCount:action.payload}
		case 'FAV_COUNT':
			return {...state,favCount:action.payload}
		case 'SHARE_COUNT':
			return {...state,shareCount:action.payload}
		case 'BOUGHT_COUNT':
			return {...state,boughtCount:action.payload}
		case 'TRASH_COUNT':
			return {...state,trashCount:action.payload}
		case 'EL_COUNT':
			return {...state,elCount:action.payload}
		case 'FOLD_COUNT':
			return {...state,foldCount:action.payload}
		case 'CLOUD_COUNT':
			return {...state,cloudCount:action.payload}
		default:
			return state
	}
}