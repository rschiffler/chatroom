import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoomApp from './ChatRoomApp.jsx';
import { createStore } from 'redux';
import chatRoomApp from './reducers/reducers';

let store = createStore(chatRoomApp)

ReactDOM.render(<ChatRoomApp store={store} />, document.getElementById('root'));