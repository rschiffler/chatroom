import { combineReducers } from 'redux';
import { ADD_MESSAGE } from '../actions/actions';

function chatRoom(state = [], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, { message: action.message, user: 'anonymous', date: new Date() } ];
		default:
			return state;
	}
}

const chatRoomApp = combineReducers({
	chatRoom
});

export default chatRoomApp;