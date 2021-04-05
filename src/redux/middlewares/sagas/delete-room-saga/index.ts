import {
  DELETE_ROOM,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_FAIL,
} from '../../../actions/types';
import {put, takeEvery} from '@redux-saga/core/effects';
import {deleteRoom} from '../../api';

function* deleteRoomFlow(action: any) {
  const res = deleteRoom(action.roomId);

  if (res.resultCode === 1) {
    yield put({
      type: DELETE_ROOM_SUCCESS,
      data: res,
      message: 'Success!',
    });
  } else {
    yield put({
      type: DELETE_ROOM_FAIL,
      data: null,
      message: 'Fail!',
    });
  }
}

export function* watchDeleteRoom() {
  yield takeEvery(DELETE_ROOM, deleteRoomFlow);
}
