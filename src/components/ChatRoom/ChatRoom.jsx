import React from 'react';

// Styles
import styles from './ChatRoom.scss';

// Components
import MessageBox from '../MessageBox/MessageBox.jsx';

export default class ChatRoom extends React.Component {
  render() {
    return (
     <div className="ChatRoom">
        <div className="ChatRoom__users">
          {/* todo: output message from the store */}
        </div>
        <div className="ChatRoom__messages">
          <MessageBox />
        </div>
      </div>
    )
  }
}