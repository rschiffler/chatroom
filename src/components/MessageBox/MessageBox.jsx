import React from 'react';

// Styles
import styles from './MessageBox.scss';

export default class MessageBox extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault();
		// todo: setup a store for messages
		// todo: save message in the store
		console.log('submit');
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