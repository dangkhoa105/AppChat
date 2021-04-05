import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect, ConnectedProps} from 'react-redux';
import {HeaderApp} from '../../components';
import {colors, images} from '../../res';
import {
  getAllRoomChatByUIDAction,
  getMessagesInRoomChatAction,
  sendMessageAction,
} from '../../redux/actions';
import ChatScreen from '../../screens/Chat/ChatScreen';

function ChatContainer(props: PropsFromRedux) {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const iconLeft: any = {name: images.ic_back, size: 30, color: colors.white};
  const container: ViewStyle = {flex: 1};
  return (
    <SafeAreaView style={container}>
      <HeaderApp
        title={route.params?.name}
        iconLeft={iconLeft}
        onPressIconLeft={() => navigation.goBack()}
      />
      <ChatScreen {...props} />
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllRoomChatByUIDAction: (uid: number) => {
      dispatch(getAllRoomChatByUIDAction(uid));
    },
    getMessagesInRoomChatAction: (roomId: number) => {
      dispatch(getMessagesInRoomChatAction(roomId));
    },
    sendMessageAction: (message: string, roomId: number) => {
      dispatch(sendMessageAction(message, roomId));
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    fetchingMessagesInRoom: state.getMessagesInRoomChatReducer.fetching,
    dataMessagesInRoom: state.getMessagesInRoomChatReducer.data,
    messageMessagesInRoom: state.getMessagesInRoomChatReducer.message,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ChatContainer);
