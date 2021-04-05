import {sendMessageInRoom} from './../../../../res/database';
export const sendMessage = (message: string, roomId: number) => {
  if (typeof roomId === 'number') {
    sendMessageInRoom(message, roomId);
    return {
      resultCode: 1,
    };
  } else {
    return {
      resultCode: -1,
    };
  }
};
