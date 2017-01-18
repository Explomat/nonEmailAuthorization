import { combineReducers } from 'redux';
import register from './register';
import passwordRemind from './passwordRemind';

export default combineReducers({
	register,
	passwordRemind
});