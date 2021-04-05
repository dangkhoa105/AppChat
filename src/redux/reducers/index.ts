import {combineReducers} from 'redux';
import {changeThemeReducer} from './changeThemeReducer/changeThemeReducer';
import {getAllRoomChatByUIDReducer} from './get-all-room-chat-reducer';
import {getMessagesInRoomChatReducer} from './get-messages-in-room-chat-reducer';
import {sendMessageReducer} from './send-message-reducer';
import {deleteRoomReducer} from './delete-room-reducer';

export default combineReducers({
  changeThemeReducer,
  getAllRoomChatByUIDReducer,
  getMessagesInRoomChatReducer,
  sendMessageReducer,
  deleteRoomReducer,
});
