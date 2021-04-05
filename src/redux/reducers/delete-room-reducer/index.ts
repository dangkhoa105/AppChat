import {
  DELETE_ROOM,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_FAIL,
} from '../../actions/types';

const initState = {
  fetching: null,
  message: null,
  data: null,
};

export const deleteRoomReducer = (state = initState, action: any) => {
  switch (action.type) {
    case DELETE_ROOM:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
        data: null,
      });
    case DELETE_ROOM_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    case DELETE_ROOM_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        message: action.message,
        data: action.data,
      });
    default:
      return state;
  }
};
