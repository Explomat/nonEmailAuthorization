import { post } from '../utils/ajax';
import config from '../config';
import constants from '../constants';

export function clearError(){
	return {
		type: constants.CLEAR_ERROR
	}
}

export function clearMessage(){
	return {
		type: constants.CLEAR_MESSAGE
	}
}


export function changeLastname(value){
	return {
		type: constants.CHANGE_LAST_NAME,
		value
	}
}

export function changeFirstname(value){
	return {
		type: constants.CHANGE_NAME,
		value
	}
}

export function changeMiddlename(value){
	return {
		type: constants.CHANGE_MIDDLE_NAME,
		value
	}
}

export function changeDateNumber(e, payload){
	return {
		type: constants.CHANGE_DATE_NUMBER,
		payload
	}
}

export function changeDateMonth(e, payload){
	return {
		type: constants.CHANGE_DATE_MONTH,
		payload
	}
}

export function changeEmail(value){
	return {
		type: constants.CHANGE_EMAIL,
		value
	}
}

export function changeLogin(value){
	return {
		type: constants.CHANGE_LOGIN,
		value
	}
}

export function changePassword(value){
	return {
		type: constants.CHANGE_PASSWORD,
		value
	}
}

export function changeConfirmPassword(value){
	return {
		type: constants.CHANGE_CONFIRM_PASSWORD,
		value
	}
}


function registerRequest() {
	return {
		type: constants.REGISTER_REQUEST,
	};
}

function receiveRegister(response) {
	return {
		type: constants.REGISTER_REQUEST_SUCCESS,
		response
	};
}

function errorRegister(error){
	return {
		type: constants.REGISTER_REQUEST_FAILURE,
		error
	};
}

function isNotFilled({register}){
	const { lastname, firstname, middlename, dateMonth, dateNumber, email, login, password, confirmPassword } = register;
	return !lastname || !firstname || !middlename || (dateMonth === 0) || (dateNumber === 0) || !email || !login || !password || !confirmPassword;
}

export function register(){
	return (dispatch, getState) => {
		if (isNotFilled(getState())){
			dispatch(errorRegister("Необходимо заполнить все поля!"));
			return;
		}
		
		dispatch(registerRequest());
		
		const {register} = getState();
		post(config.url.createPath({server_name: 'Test', action_name: 'register'}), JSON.stringify(register))
		.then(resp => JSON.parse(resp))
		.then(resp => {
			if (resp.error){
				dispatch(errorRegister(resp.error));
			} else {
				dispatch(receiveRegister(resp));
			}
		})
		.catch(e => {
			dispatch(errorRegister(e.message));
		});
	};
}
