import React from 'react';

// Styles
import styles from './UserRegister.scss';

// Components

export default class UserRegister extends React.Component {
	render() {
		return (
			<div className="UserRegister">
				<form className="UserRegister__form">

					<label htmlFor="first-name" value="First name" />
                    <input id="first-name" type="text" />

                    <label htmlFor="last-name" value="Last name" />
                    <input id="last-name" type="text" />

                    <label htmlFor="password-first" value="Password" />
                    <input id="password-first" type="password" />

                    <label htmlFor="password-confirm" value="Confirm" />
                    <input id="password-confirm" type="password" />

                    <input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}