import {deleteRoomChat} from '../../../../res';
export const deleteRoom = (roomId: number) => {
  if (typeof roomId === 'number') {
    deleteRoomChat(roomId);
    return {
      resultCode: 1,
    };
  } else {
    return {
      resultCode: -1,
    };
  }
};
