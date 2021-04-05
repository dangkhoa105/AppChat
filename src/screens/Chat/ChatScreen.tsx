import React from 'react';
import {useRoute} from '@react-navigation/core';
import {StyleSheet} from 'react-native';
import {Box, objectIsNull} from '../../components';
import {userProfile} from '../../res/profile';
import {PropsFromRedux} from '../../containers/ChatContainer/ChatContainer';
import ChatBox from './components/chat-box';
import Input from './components/input';

export default function ChatScreen(props: PropsFromRedux) {
  const route = useRoute<any>();
  const [data, setData] = React.useState<any>(null);
  const [isExtend, setIsExtend] = React.useState(false);
  const [isKeyBoardDidShow, setIsKeyBoardDidShow] = React.useState(false);

  React.useEffect(() => {
    props.getMessagesInRoomChatAction(route.params?.roomId);
  }, []);

  React.useEffect(() => {
    if (!objectIsNull(props.dataMessagesInRoom)) {
      setData(props.dataMessagesInRoom);
    }
  }, [props.dataMessagesInRoom]);

  const onSend = (text: string) => {
    if (text.trim() !== '') {
      props.sendMessageAction(text, route.params?.roomId);
      props.getMessagesInRoomChatAction(route.params?.roomId);
      props.getAllRoomChatByUIDAction(userProfile.uid);
    }
  };

  return (
    <Box full style={styles.container}>
      <ChatBox
        data={data}
        isExtend={isExtend}
        isKeyBoardDidShow={isKeyBoardDidShow}
      />
      <Input
        placeholder="Add text to this message"
        getIsExtend={(value: boolean) => setIsExtend(value)}
        getIsKeyBoardDidShow={(value: boolean) => setIsKeyBoardDidShow(value)}
        onSend={(text) => onSend(text)}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
});
