import Registration from '../components/Registration';
import {registerCreators} from '../actions';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	const {register} = state;
	return {
		...register
	};
}

export default connect(mapStateToProps, registerCreators)(Registration);