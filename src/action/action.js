import * as Action from './actionType.js'

export function changeColor(payload){
	return{
		type:Action.CHANGE_COLOR,
		payload
	}
}
export function changeName(payload){
	return{
		type:Action.CHANGE_NAME,
		payload
	}
}
export function callModalOver(payload){
	return {
		type:Action.OVER,
		payload
	}
}
export function callColorModal(payload){
	return {
		type:Action.COLOR_LIST,
		payload
	}
}
export function callColorPicker(payload){
	return {
		type:Action.COLOR_PICKER,
		payload
	}
}
export function closeColorPicker(){
	return {
		type:Action.CLOSE_COLOR_PICKER
	}
}
export function callVersionModal(payload){
	return{
		type:Action.VERSION_MODAL,
		payload
	}
}
export function closeModal(){
	return{
		type:Action.CLOSE_MODAL,
		payload:{
			over:false,
			versionModal:false,
		}
	}
}