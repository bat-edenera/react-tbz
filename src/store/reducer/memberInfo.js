const memberInfo ={
	userName:'edenera',
	themeColor:'#e56281',
	isDiy:false,
}
export default (state=memberInfo,action)=>{
	switch (action.type){
		case 'CHANGE_COLOR':
			return {...state,...action.payload}
		case 'CHANGE_NAME':
			return {...state,userName:action.payload}
		default:
			return state
	}
}