import React from 'react';
import styles from './ChatRoom.scss';

export default class ChatRoom extends React.Component {
  render() {
    return (
     <div className="ChatRoom">
        <div className="ChatRoom__users">
        </div>
        <div className="ChatRoom__messages">
        </div>
      </div>
    )
  }
}