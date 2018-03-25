// Libraries
import React from 'react';

// Components
import ChatRoom from '../components/ChatRoom/ChatRoom.jsx';

export default class MessagesPage extends React.Component {
    render() {
        console.log(this.props);
        return(
            <ChatRoom store={this.props.store} />
        )
	}
}