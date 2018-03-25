// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

// Components
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';

const PrivateRoute = () => (
	<Route render={props => (
		localStorage.getItem('user')
            ? <Redirect to={'/messages'} />
            : <Redirect to={'/login'} />
    )} />
);

export default class ChatRoomApp extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<PrivateRoute exact path="/" />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/messages" render={() => (
						<MessagesPage store={this.props.store} />
					)} />
				</Switch>
			</Router>
		)
	}
}