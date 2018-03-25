// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import ChatRoomApp from './ChatRoomApp.jsx';
import chatRoomApp from './reducers/reducers';


let store = createStore(chatRoomApp)

ReactDOM.render(
    <Provider store={store}>
        <ChatRoomApp />
    </Provider>, 
    document.getElementById('root')
);