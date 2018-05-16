import React from 'react';
import { addMessage } from '../../actions/actions'

// Styles
import styles from './MessageBox.scss';

export default class MessageBox extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const message = event.target.querySelector('input[type=text]').value;
		if(message && message.length > 0) {
			this.props.store.dispatch(addMessage(message));
			event.target.querySelector('input[type=text]').value = '';
		}
	}

	render() {
		return (
			<div className="MessageBox">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="message">Enter message: </label>
					<input type="text" id="message" name="message" />
					<input type="submit" text="Submit" />
				</form>
			</div>
		)
	}
}