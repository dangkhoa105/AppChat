import {DELETE_ROOM} from './../types';
export const deleteRoomAction = (roomId: number) => {
  return {
    type: DELETE_ROOM,
    roomId,
  };
};
