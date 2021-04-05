import {SEND_MESSAGE} from './../types';
export const sendMessageAction = (message: string, roomId: number) => {
  return {
    type: SEND_MESSAGE,
    message,
    roomId,
  };
};
