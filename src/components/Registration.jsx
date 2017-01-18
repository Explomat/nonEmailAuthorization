import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import {TextView} from './modules/text-label';
import {ButtonPrimary} from './modules/button';
import DropDown from './modules/dropdown';
import {AlertDanger, AlertWarning, AlertInfo} from './modules/alert';

import {validateEmail, validatePassword, validateLogin} from '../utils/validate';

const Registration = ({ ...props }) => {
	const {error, message, lastname, firstname, middlename, dateMonth, dateNumber, email, login, password, confirmPassword} = props;
	
	return (
		<div className="authorization-container">
			{error && <AlertDanger text={error} onClose={props.clearError} />}
			{message && <AlertInfo text={message} onClose={props.clearMessage} />}
			<div className="authorization">
				<div className="clearfix">
					<TextView
						value={lastname}
						onBlur={props.changeLastname}
						placeholder="Фамилия" 
						className="authorization__lastname"
						focused={true}
						isValid={val => val !== ''}/>
					<TextView
						value={firstname}
						onBlur={props.changeFirstname} 
						placeholder="Имя" 
						className="authorization__name"
						isValid={val => val !== ''}/>
				</div>
				<TextView
					value={middlename}
					onBlur={props.changeMiddlename} 
					placeholder="Отчество" 
					className="authorization__middlename"
					isValid={val => val !== ''}/>
					
				<div className="authorization__date clearfix">
					<div>
						<i className="icon-calendar authorization__icon-calendar" />
						Дата рождения
					</div>
					<DropDown
						onChange={props.changeDateNumber}
						className="authorization__number"
						deviders={[1]}
						selectedPayload={dateNumber}
						items={
							[{ payload: 0, text: "Число" },
							{ payload: 1, text: "1" },
							{ payload: 2, text: "2" },
							{ payload: 3, text: "3" },
							{ payload: 4, text: "4" },
							{ payload: 5, text: "5" },
							{ payload: 6, text: "6" },
							{ payload: 7, text: "7" },
							{ payload: 8, text: "8" },
							{ payload: 9, text: "9" },
							{ payload: 10, text: "10" },
							{ payload: 11, text: "11" },
							{ payload: 12, text: "12" },
							{ payload: 13, text: "13" },
							{ payload: 14, text: "14" },
							{ payload: 15, text: "15" },
							{ payload: 16, text: "16" },
							{ payload: 17, text: "17" },
							{ payload: 18, text: "18" },
							{ payload: 19, text: "19" },
							{ payload: 20, text: "20" },
							{ payload: 21, text: "21" },
							{ payload: 22, text: "22" },
							{ payload: 23, text: "23" },
							{ payload: 24, text: "24" },
							{ payload: 25, text: "25" },
							{ payload: 26, text: "26" },
							{ payload: 27, text: "27" },
							{ payload: 28, text: "28" },
							{ payload: 29, text: "29" },
							{ payload: 30, text: "30" },
							{ payload: 31, text: "31" }]
					}/>
					<DropDown
						onChange={props.changeDateMonth}
						className="authorization__month" 
						deviders={[1]}
						selectedPayload={dateMonth}
						items={
							[{ payload: 0, text: "Месяц" },
							{ payload: 1, text: "Январь" },
							{ payload: 2, text: "Февраль" },
							{ payload: 3, text: "Март" },
							{ payload: 4, text: "Апрель" },
							{ payload: 5, text: "Май" },
							{ payload: 6, text: "Июнь" },
							{ payload: 7, text: "Июль" },
							{ payload: 8, text: "Август" },
							{ payload: 9, text: "Сентябрь" },
							{ payload: 10, text: "Октябрь" },
							{ payload: 11, text: "Ноябрь" },
							{ payload: 12, text: "Декабрь" }]
					}/>
				</div>
				
				<TextView
					value={email}
					onBlur={props.changeEmail} 
					placeholder="Email" 
					className="authorization__email"
					isValid={validateEmail}/>
				<TextView
					value={login}
					onBlur={props.changeLogin} 
					placeholder="Логин" 
					className="authorization__login"
					isValid={validateLogin}/>
				<AlertWarning 
					text="Пароль не должен содержать знаки препинания и другие символы. Минимальная длина пароля 8 символов. Также он должен содержать минимум одну цифру, одну маленькую букву и одну заглавную."
					className="authorization__password-description"
					isClose={false} />
				<TextView
					type="password"
					value={password}
					onBlur={props.changePassword} 
					placeholder="Пароль" 
					className="authorization__password"
					isValid={validatePassword}/>
				<TextView
					type="password"
					value={confirmPassword}
					onBlur={props.changeConfirmPassword} 
					placeholder="Повторите пароль" 
					className="authorization__confirm-password"
					isValid={val => { return (validatePassword(val) && val === password) }}/>
			</div>
			<div className="authorization-container__buttons">
				<ButtonPrimary
					onClick={props.register}
					text="Зарегистрироваться" 
					className="authorization-container__register"/>
				<Link to='password-remind' className="authorization-container__remind-password">Забыли пароль?</Link>
			</div>
		</div>
	)
}

export default Registration;