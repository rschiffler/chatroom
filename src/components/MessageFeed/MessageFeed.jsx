// Libraries
import React from 'react';
import relativeDate from 'relative-date';

// Styles
import styles from './MessageFeed.scss';

export default class MessageFeed extends React.Component {
	constructor(props) {
		super(props);
		this.unsubscribe = this.props.store.subscribe(this.handleChange);

		this.state = {
			messages: []
		}
	}

	handleChange = (message) => {
		let state = this.props.store.getState();
		if(state) {
			this.setState({messages: state.chatRoom});
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div className="MessageFeed">
				{this.state.messages.map((item, index) => {
					return(
						<div className="MessageFeed__message" key={index}>
							<div className="MessageFeed__user">{item.user} <span className="MessageFeed__date">{relativeDate(item.date)}</span></div>
							<div className="MessageFeed__text">{item.message}</div>
						</div>
					)
				})}
			</div>
		)
	}
}