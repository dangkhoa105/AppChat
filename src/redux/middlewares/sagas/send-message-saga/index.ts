import {
  SEND_MESSAGE,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_SUCCESS,
} from './../../../actions/types';
import {put, takeEvery} from '@redux-saga/core/effects';
import {sendMessage} from '../../api';

function* sendMessageFlow(action: any) {
  const res = sendMessage(action.message, action.roomId);

  if (res.resultCode === 1) {
    yield put({
      type: SEND_MESSAGE_SUCCESS,
      data: res,
      message: 'Success!',
    });
  } else {
    yield put({
      type: SEND_MESSAGE_FAIL,
      data: null,
      message: 'Fail!',
    });
  }
}

export function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, sendMessageFlow);
}
