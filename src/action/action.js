import {CHANGE_COLOR,CHANGE_NAME,OVER,COLOR_LIST,COLOR_PICKER,CLOSE_COLOR_PICKER} from './actionType.js'

export function changeColor(payload){
	return{
		type:CHANGE_COLOR,
		payload
	}
}
export function changeName(payload){
	return{
		type:CHANGE_NAME,
		payload
	}
}
export function callModalOver(payload){
	return {
		type:OVER,
		payload
	}
}
export function callColorModal(payload){
	return {
		type:COLOR_LIST,
		payload
	}
}
export function callColorPicker(payload){
	return {
		type:COLOR_PICKER,
		payload
	}
}
export function closeColorPicker(){
	return {
		type:CLOSE_COLOR_PICKER
	}
}