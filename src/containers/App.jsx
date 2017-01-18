import React, { PropTypes } from 'react';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';

//import Authorization from '../components/Authorization';
import {ButtonSuccess} from '../components/modules/button';

const App = ({ ...props }) => {
	return (
		<div className="container">
			<div className="header">
				<div className="header__wrapper">
					<span className="header__site">
						<a className="header__enter-link" href="/view_doc.html?mode=home">e-learning</a>
					</span>
					<ButtonSuccess className="header__enter">
						<a className="header__enter-link" href="/view_doc.html?mode=home">Войти если зарегистрированы</a>
					</ButtonSuccess>
				</div>
			</div>
			<div className="body">
				<div className="body__description">
					<h1 className="body__description-text">Регистрация нового пользователя!</h1>
					<div className="body__img"></div>
				</div>
				<div className="body__content">
					{props.children}
				</div>
			</div>
			<div className="footer">
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		...state
	};
}

export default connect(mapStateToProps, actionCreators)(App);