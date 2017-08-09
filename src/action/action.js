export function checkLog(){
	return{type:'CHECK_LOG'}
}
export function logOut(){
	return{type:'LOGIN_OUT'}
}
export function changeColor(color){
	return{
		type:'CHANGE_COLOR',
		color,
	}
}