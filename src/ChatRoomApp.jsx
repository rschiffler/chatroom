// Libraries
import React from 'react';

// Components
import ChatRoom from './components/ChatRoom/ChatRoom.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

export default class ChatRoomApp extends React.Component {
    render() {
        let isLoggedIn = this.props.store.getState().user.isLoggedIn;
		if(isLoggedIn) {
			return (
                <LoginForm />
			)
		} else {
			return(
				<ChatRoom store={this.props.store} />
			)
		}
	}
}