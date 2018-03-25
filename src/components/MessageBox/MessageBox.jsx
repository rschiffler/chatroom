import React from 'react';
import { addMessage } from '../../Redux/actions'

// Styles
import styles from './MessageBox.scss';

export default class MessageBox extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.store.dispatch(addMessage(event.target.querySelector('input[type=text]').value));
		event.target.querySelector('input[type=text]').value = '';
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