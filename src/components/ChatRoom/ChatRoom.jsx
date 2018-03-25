import React from 'react';

// Styles
import styles from './ChatRoom.scss';

// Components
import MessageBox from '../MessageBox/MessageBox.jsx';
import MessageFeed from '../MessageFeed/MessageFeed.jsx';

export default class ChatRoom extends React.Component {
	render() {
		return (
			<div className="ChatRoom">
				<div className="ChatRoom__messages">
					<MessageFeed store={this.props.store} />
					<MessageBox store={this.props.store} />
				</div>
			</div>
		)
	}
}