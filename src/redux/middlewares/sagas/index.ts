import {all, fork} from 'redux-saga/effects';
import {watchGetAllRoomChatByUID} from './get-all-room-chat-saga';
import {watchGetMessagesInRoomChat} from './get-messages-in-room-chat-saga';
import {watchSendMessage} from './send-message-saga';
import {watchDeleteRoom} from './delete-room-saga';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllRoomChatByUID),
    fork(watchGetMessagesInRoomChat),
    fork(watchSendMessage),
    fork(watchDeleteRoom),
  ]);
}
