//Libraries
import React from 'react';

// Styles
import styles from './LoginForm.scss';

// Components
import Tabs from '../Tabs/Tabs.jsx';
import Register from './Register.jsx';

export default class LoginForm extends React.Component {
	render() {
		const testContent = <p>hi</p>
		return (
			<div className="LoginForm">
                <Tabs activeTab={0} tabs={[ {'id': 0, 'title': 'Sign up', 'content': <Register />}, {'id': 1, 'title': 'Login', 'content': testContent} ] } />
            </div>
		)
	}
}