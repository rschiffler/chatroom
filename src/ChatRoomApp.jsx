// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

// Components
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';

export const PrivateRoute = () => (
	<Route render={props => (
		localStorage.getItem('user')
            ? <Redirect to={{ pathname: '/messages', state: { from: props.location } }} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default class ChatRoomApp extends React.Component {
    render() {
        return (
			<Router>
				<div>
					<PrivateRoute exact path="/" />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/messages" component={MessagesPage} />
				</div>
			</Router>
		)
	}
}