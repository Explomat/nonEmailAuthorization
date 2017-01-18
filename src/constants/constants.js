import keyMirror from 'keyMirror';
import createRemoteActions from './utils/createRemoteActions';
import merge from 'lodash/merge';

const remoteConstants = createRemoteActions([
	'REGISTER_REQUEST',
	'REMIND_REQUEST'
]);

const constants = keyMirror({
	CLEAR_ERROR: null,
	CLEAR_MESSAGE: null,
	CHANGE_LAST_NAME: null,
	CHANGE_NAME: null,
	CHANGE_MIDDLE_NAME: null,
	CHANGE_DATE_MONTH: null,
	CHANGE_DATE_NUMBER: null,
	CHANGE_EMAIL: null,
	CHANGE_LOGIN: null,
	CHANGE_PASSWORD: null,
	CHANGE_CONFIRM_PASSWORD: null,
	
	PASS_REMINDER_CHANGE_EMAIL: null,
	PASS_REMINDER_CLEAR_ERROR: null,
	PASS_REMINDER_CLEAR_MESSAGE: null
});

export default merge(remoteConstants, constants);