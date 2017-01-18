import React from 'react';
import {TextView} from './modules/text-label';
import {ButtonPrimary} from './modules/button';
import {AlertInfo, AlertDanger} from './modules/alert';
import {validateEmail} from '../utils/validate';

const PasswordRemind = ({ ...props }) => {
	const {error, message, email} = props;
	
	return (
		<div className="password-remind">
			{error && <AlertDanger text={error} onClose={props.clearError} />}
			{message && <AlertInfo text={message} onClose={props.clearMessage} />}
			<AlertInfo 
				text="Введите почту, указанную при регистрации, на которую мы вышлем Вам ваш пароль"
				className="password-remind__warning" />
			<TextView
				value={email}
				onBlur={props.changeEmail}
				placeholder="Email"
				className="password-remind__email"
				focused={true}
				isValid={validateEmail}/>
			<ButtonPrimary
				onClick={props.remind}
				text="Напомнить пароль"
				className="password-remind__remind-button"/>
		</div>
	)
}

export default PasswordRemind;