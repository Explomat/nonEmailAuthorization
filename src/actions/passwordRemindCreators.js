import { post } from '../utils/ajax';
import config from '../config';
import constants from '../constants';

export function clearError(){
	return {
		type: constants.PASS_REMINDER_CLEAR_ERROR
	}
}

export function clearMessage(){
	return {
		type: constants.PASS_REMINDER_CLEAR_MESSAGE
	}
}

export function changeEmail(value){
	return {
		type: constants.PASS_REMINDER_CHANGE_EMAIL,
		value
	}
}

function remindRequest() {
	return {
		type: constants.REMIND_REQUEST,
	};
}

function receiveRemind(response) {
	return {
		type: constants.REMIND_REQUEST_SUCCESS,
		response
	};
}

function errorRemind(error){
	return {
		type: constants.REMIND_REQUEST_FAILURE,
		error
	};
}


function isNotFilled({passwordRemind}){
	const {email} = passwordRemind;
	return !email;
}

export function remind(){
	return (dispatch, getState) => {
		if (isNotFilled(getState())){
			dispatch(errorRemind("Необходимо заполнить email!"));
			return;
		}
		
		dispatch(remindRequest());
		
		const {passwordRemind} = getState();
		post(config.url.createPath({server_name: 'Test', action_name: 'remind'}), JSON.stringify(passwordRemind))
		.then(resp => JSON.parse(resp))
		.then(resp => {
			if (resp.error){
				dispatch(errorRemind(resp.error));
			} else {
				dispatch(receiveRemind(resp));
			}
		})
		.catch(e => {
			dispatch(errorRemind(e.message));
		});
	};
}
