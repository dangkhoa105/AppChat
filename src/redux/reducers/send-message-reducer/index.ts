import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
} from '../../actions/types';

const initState = {
  fetching: null,
  message: null,
  data: null,
};

export const sendMessageReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
        data: null,
      });
    case SEND_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    case SEND_MESSAGE_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    default:
      return state;
  }
};
