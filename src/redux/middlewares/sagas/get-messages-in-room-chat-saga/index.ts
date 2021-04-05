import {
  GET_MESSAGES_IN_ROOM_CHAT,
  GET_MESSAGES_IN_ROOM_CHAT_FAIL,
  GET_MESSAGES_IN_ROOM_CHAT_SUCCESS,
} from './../../../actions/types';
import {put, takeEvery} from '@redux-saga/core/effects';
import {getMessagesInRoomChat} from './../../api';

function* getMessagesInRoomChatFlow(action: any) {
  const res = getMessagesInRoomChat(action.roomId);

  if (res) {
    yield put({
      type: GET_MESSAGES_IN_ROOM_CHAT_SUCCESS,
      data: res,
      message: 'Success!',
    });
  } else {
    yield put({
      type: GET_MESSAGES_IN_ROOM_CHAT_FAIL,
      data: null,
      message: 'Fail!',
    });
  }
}

export function* watchGetMessagesInRoomChat() {
  yield takeEvery(GET_MESSAGES_IN_ROOM_CHAT, getMessagesInRoomChatFlow);
}
