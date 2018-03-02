import { combineReducers } from 'redux';
import { ADD_MESSAGE } from './actions';
 
function chatRoom(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          message: action.message
        }
      ]
    default:
      return state;
  }
}
 
const chatRoomApp = combineReducers({
  chatRoom
});
 
export default chatRoomApp