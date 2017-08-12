//系列颜色
const color = {
	bgColor:'',
	drakColor:'',
	lightColor:'',
	fontColor:'',
	underBg:''
}
//no api
export default (state=color,action)=>{
	switch (action.type){
		case 'INIT_COLOR':
			return {...action.payload}
		default:
			return state
	}
}