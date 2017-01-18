import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './containers/App';
import RegistrationContainer from './containers/RegistrationContainer';
import PasswordRemindContainer from './containers/PasswordRemindContainer';
import config from './config';

import 'babel-polyfill';
import './styles';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={RegistrationContainer} />
				<Route path="password-remind" component={PasswordRemindContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById(config.dom.appId)
);