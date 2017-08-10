export function changeColor(payload){
	console.log(payload)
	return{
		type:'CHANGE_COLOR',
		payload
	}
}
export function changeName(payload){
	return{
		type:'CHANGE_NAME',
		payload
	}
}
export function callModalOver(payload){
	return {
		type:'OVER',
		payload
	}
}
export function callColorModal(payload){
	return {
		type:'COLOR_LIST',
		payload
	}
}