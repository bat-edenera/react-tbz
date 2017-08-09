export default (state="#00a2eb",action)=>{
	switch (action.type){
		case 'CHANGE_COLOR':
			return action.color
		default:
			return state
	}
}
