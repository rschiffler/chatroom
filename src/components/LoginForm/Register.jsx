//Libraries
import React from 'react';

// Styles
import styles from './Register.scss';

export default class Register extends React.Component {
	render() {
		return (
			<div className="Register">
                <h1>Sign up for free</h1>
				<div className="Register__form-group--50">
					<input className="Register__input" type="text" placeholder="First name" />
					<input className="Register__input" type="text" placeholder="Last name" />
				</div>
				<div className="Register__form-group--100">
					<input className="Register__input" type="email" placeholder="Email address" />
				</div>
				<div className="Register__form-group--100">
					<input className="Register__input" type="text" placeholder="Password" />
				</div>
				<div className="Register__form-group--100">
					<input className="Register__input" type="text" placeholder="Confirm password" />
				</div>
            </div>
		)
	}
}