import moment from 'moment';
import {userProfile} from '../profile';

const users = [
  {
    uid: 0,
    name: 'Dang Khoa',
  },
  {
    uid: 1,
    name: 'Kim Ngoc',
  },
  {
    uid: 2,
    name: 'Apex',
  },
  {
    uid: 3,
    name: 'Internet Bundle',
  },
  {
    uid: 4,
    name: 'MTB Cards',
  },
];

const roomChat = [
  {
    id: 0,
    users: [0, 1],
  },
  {
    id: 1,
    users: [0, 2],
  },
  {
    id: 2,
    users: [1, 2],
  },
  {
    id: 3,
    users: [3, 4],
  },
];

// const status = {
//   read: 'read',
//   delivery: 'delivery',
//   sent: 'sent',
// };

const chatMsg = [
  {
    roomId: 0,
    messages: [
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message: 'Hello hello hello',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message: 'Hello hello hello',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message:
          'Hello hello helloadadsadadasdasdafkjsahdashdkjashdkajshdkjsadhkaj',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message: 'Hello hello hello',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message: 'Hello hello hello',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-25T08:00:10',
      },
      {
        uid: 1,
        message: 'Hello hello hello',
        time: '2021-03-25T08:00:10',
      },
    ],
  },
  {
    roomId: 1,
    messages: [
      {
        uid: 0,
        message: 'Alo alo alo',
        time: '2021-03-26T08:00:10',
      },
      {
        uid: 2,
        message: 'Hello hello hello',
        time: '2021-03-26T08:00:10',
      },
    ],
  },
  {
    roomId: 2,
    messages: [
      {
        uid: 1,
        message: 'Alo alo alo',
        time: '2021-03-27T08:00:10',
      },
      {
        uid: 2,
        message: 'Hello hello hello',
        time: '2021-03-27T08:00:10',
      },
    ],
  },
  {
    roomId: 3,
    messages: [
      {
        uid: 3,
        message: 'Alo alo alo',
        time: '2021-03-27T08:00:10',
      },
      {
        uid: 4,
        message: 'Hello hello hello',
        time: '2021-03-27T08:00:10',
      },
    ],
  },
];

export const getNameChat = (uid: any) => {
  return users.find((user) => user.uid === uid);
};

const getAnotherUserInRoom = (data: number[], uid: any) => {
  return data.find((v) => v !== uid);
};

export const getAllRoomChatByUID = (uid: any) => {
  let rooms: any[] = [];
  roomChat.map((room) => {
    room.users.map((user) => {
      if (user === uid) {
        const name = getNameChat(getAnotherUserInRoom(room.users, uid))?.name;
        chatMsg.map((chat) => {
          if (chat.roomId === room.id) {
            const latestMessage =
              chat.messages[chat.messages.length - 1].message;
            const latestTime = chat.messages[chat.messages.length - 1].time;
            rooms.push({...chat, name, latestMessage, latestTime});
          }
        });
      }
    });
  });

  return rooms;
};

export let allRooms = getAllRoomChatByUID(userProfile.uid);

export const getMessagesRoomChatByRoomId = (roomId: any) => {
  return allRooms.find((room) => room.roomId === roomId);
};

export const sendMessageInRoom = (message: string, roomId: any) => {
  const latestTime = moment().toISOString();
  const messagesInRoom = getMessagesRoomChatByRoomId(roomId);
  Object.assign(messagesInRoom, {latestMessage: message, latestTime});
  const objMessage = {
    message,
    time: latestTime,
    uid: userProfile.uid,
  };
  messagesInRoom.messages.push(objMessage);
  return messagesInRoom;
};

export const deleteRoomChat = (roomId: any) => {
  allRooms = allRooms.filter((room) => room.roomId !== roomId);
};

export const getRecentMessages = (mess: any[]) => {
  return mess.filter(
    (v, _) => moment(v.latestTime).diff(moment(), 'days') >= -2,
  );
};
