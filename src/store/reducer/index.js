import {combineReducers} from 'redux';
import login from './loginState.js';
import color from './color.js';
const reducer = combineReducers({
	themeColor:color,
	loginState:login
})
export default reducer