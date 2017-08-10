import {combineReducers} from 'redux';
import loginInfo from './loginInfo.js';
import memberInfo from './memberInfo.js';
import modal from './modal.js'
const reducer = combineReducers({
	loginInfo,
	memberInfo,
	modal
})
export default reducer