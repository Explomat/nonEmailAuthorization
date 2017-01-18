import constants from '../constants';
import { setSuccess, setFailure } from './utils/setState';
import assign from 'lodash/assign';

export default function register(state = {
	email: ''
}, action) {
	switch (action.type) {
		case constants.PASS_REMINDER_CLEAR_ERROR:
			const _newState = assign({}, state);
			delete _newState['error'];
			return _newState;
		case constants.PASS_REMINDER_CLEAR_MESSAGE:
			const _state = assign({}, state);
			delete _state['message'];
			return _state;
		case constants.PASS_REMINDER_CHANGE_EMAIL:
			return assign({}, state, {email: action.value});
			
		case constants.REMIND_REQUEST:
			return assign({}, state, { isFetching: true });
		case constants.REMIND_REQUEST_FAILURE:
			return setFailure(state, action.error, 'error', 'isFetching');
		case constants.REMIND_REQUEST_SUCCESS:
			return assign(setSuccess(state, action.response, 'error', 'isFetching'), {message: 'Вам отправлено письмо на указанную почту!'});
		default:
			return state;
	}
}

