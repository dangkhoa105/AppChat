import {
  GET_ALL_ROOM_CHAT,
  GET_ALL_ROOM_CHAT_SUCCESS,
  GET_ALL_ROOM_CHAT_FAIL,
} from '../../actions/types';

const initState = {
  fetching: null,
  message: null,
  data: null,
};

export const getAllRoomChatByUIDReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_ALL_ROOM_CHAT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
        data: null,
      });
    case GET_ALL_ROOM_CHAT_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    case GET_ALL_ROOM_CHAT_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    default:
      return state;
  }
};
