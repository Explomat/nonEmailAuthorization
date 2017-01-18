import React from 'react';
import PasswordRemind from '../components/PasswordRemind';
import {passwordRemindCreators} from '../actions';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	const {passwordRemind} = state;
	return {
		...passwordRemind
	};
}

export default connect(mapStateToProps, passwordRemindCreators)(PasswordRemind);