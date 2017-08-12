import {combineReducers} from 'redux';
import loginInfo from './loginInfo.js';
import memberInfo from './memberInfo.js';
import color from './color.js'
import modal from './modal.js'
const reducer = combineReducers({
	loginInfo,
	memberInfo,
	color,
	modal
})
export default reducer 