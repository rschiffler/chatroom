//Libraries
import React from 'react';

// Styles
//import styles from './LoginForm.scss';

// Components

export default class LoginForm extends React.Component {
	render() {
		return (
			<div className="LoginForm">
				<form className="LoginForm__form">
					<label htmlFor="username" value="Username" />
                    <input id="username" type="text" />

                    <label htmlFor="password" value="Password" />
                    <input id="password" type="password" />

                    <input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}