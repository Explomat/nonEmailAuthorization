import constants from '../constants';
import { setSuccess, setFailure } from './utils/setState';
import assign from 'lodash/assign';

export default function register(state = {
	lastname: '',
	firstname: '',
	middlename: '',
	dateMonth: 0,
	dateNumber: 0,
	email: '',
	login: '',
	password: '',
	confirmPassword: ''
}, action) {
	switch (action.type) {
		case constants.CLEAR_ERROR:
			const _newState = assign({}, state);
			delete _newState['error'];
			return _newState;
		case constants.CLEAR_MESSAGE:
			const _state = assign({}, state);
			delete _state['message'];
			return _state;
		
		case constants.CHANGE_LAST_NAME:
			return assign({}, state, { lastname: action.value });
		case constants.CHANGE_NAME:
			return assign({}, state, { firstname: action.value });
		case constants.CHANGE_MIDDLE_NAME:
			return assign({}, state, { middlename: action.value });
		case constants.CHANGE_DATE_NUMBER:
			return assign({}, state, { dateNumber: action.payload });
		case constants.CHANGE_DATE_MONTH:
			return assign({}, state, { dateMonth: action.payload });
		case constants.CHANGE_EMAIL:
			return assign({}, state, { email: action.value });
		case constants.CHANGE_LOGIN:
			return assign({}, state, { login: action.value });
		case constants.CHANGE_PASSWORD:
			return assign({}, state, { password: action.value });
		case constants.CHANGE_CONFIRM_PASSWORD:
			return assign({}, state, { confirmPassword: action.value });
		
		
		
		case constants.REGISTER_REQUEST:
			return assign({}, state, { isFetching: true });
		case constants.REGISTER_REQUEST_FAILURE:
			return setFailure(state, action.error, 'error', 'isFetching');
		case constants.REGISTER_REQUEST_SUCCESS:
			return assign(setSuccess(state, action.response, 'error', 'isFetching'), {message: "Вы успешно зарегистрировались! Нажмите на кнопку 'Войти если зарегистрированны'"});
		default:
			return state;
	}
}

