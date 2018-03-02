import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './components/ChatRoom/ChatRoom.jsx';
import { createStore } from 'redux';
import chatRoomApp from './Redux/reducers';
 
let store = createStore(chatRoomApp)

ReactDOM.render(<ChatRoom store={store} />, document.getElementById('root'));