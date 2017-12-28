//系列颜色
const color = {
	bgColor:'',
	darkColor:'',
	lightColor:'',
	fontColor:'',
	underBg:''
}
export default (state=color,action)=>{
	switch (action.type){
		case 'INIT_COLOR':
			return {...action.payload}
		default:
			return state
	}
}