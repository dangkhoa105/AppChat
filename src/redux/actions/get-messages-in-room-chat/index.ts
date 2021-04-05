import {GET_MESSAGES_IN_ROOM_CHAT} from './../types';
export const getMessagesInRoomChatAction = (roomId: number) => {
  return {
    type: GET_MESSAGES_IN_ROOM_CHAT,
    roomId,
  };
};
