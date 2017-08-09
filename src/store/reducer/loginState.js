export default (state=false,action)=>{
	switch (action.type){
		case 'CHECK_LOG':
			return !state
		default:
			return state
	}
}