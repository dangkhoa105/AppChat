import {
  GET_ALL_ROOM_CHAT,
  GET_ALL_ROOM_CHAT_SUCCESS,
  GET_ALL_ROOM_CHAT_FAIL,
} from '../../../actions/types';
import {put, takeEvery} from '@redux-saga/core/effects';
import {getAllRoomChatByUIDApi} from '../../api';

function* GetAllRoomChatByUIDFlow() {
  const res = getAllRoomChatByUIDApi();

  if (res) {
    yield put({
      type: GET_ALL_ROOM_CHAT_SUCCESS,
      data: res,
      message: 'Success!',
    });
  } else {
    yield put({
      type: GET_ALL_ROOM_CHAT_FAIL,
      data: null,
      message: 'Fail!',
    });
  }
}

export function* watchGetAllRoomChatByUID() {
  yield takeEvery(GET_ALL_ROOM_CHAT, GetAllRoomChatByUIDFlow);
}
