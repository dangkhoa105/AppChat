import React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {objectIsNull, SearchBar} from '../../components';
import {PropsFromRedux} from '../../containers/MessageContainer/MessageContainer';
import {colors, getRecentMessages} from '../../res';
import {ListMessage} from './components/list-message/list-message';
import {arrFilter} from './functions';

interface Props extends PropsFromRedux {
  getRefScrollView: (value: any) => void;

  getIsScrollDown: (value: boolean) => void;
}

export default function MessageScreen(props: Props) {
  const [allMessages, setAllMessages] = React.useState([]);
  const [text, setText] = React.useState('');
  const refScrollView = React.useRef(null);

  React.useEffect(() => {
    props.getRefScrollView(refScrollView);
    props.getAllRoomChatByUIDAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (props.dataGetAllRoomChat !== null) {
      setAllMessages(props.dataGetAllRoomChat);
    }
  }, [props.dataGetAllRoomChat]);

  React.useEffect(() => {
    if (
      !objectIsNull(props.dataDeleteRoom) &&
      props.dataDeleteRoom.resultCode === 1
    ) {
      props.getAllRoomChatByUIDAction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataDeleteRoom]);

  const onScroll = (evt: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset: number = 0;
    const {y} = evt.nativeEvent.contentOffset;

    if (y > offset) {
      props.getIsScrollDown(true);
    } else {
      props.getIsScrollDown(false);
    }
  };

  const allMessagesFilter = text === '' ? allMessages : arrFilter(text);
  const recentMessages = getRecentMessages(allMessages);

  return (
    <ScrollView
      ref={refScrollView}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      style={styles.container}>
      <View style={styles.space} />
      <SearchBar
        stylesContainer={styles.search}
        placeholder={allMessages.length + ' Messages'}
        onSearching={(value) => setText(value)}
      />
      <ListMessage
        title="Recent Messages"
        data={recentMessages}
        deleteRoomAction={(roomId: number) => props.deleteRoomAction(roomId)}
      />
      <ListMessage
        title="All Messages"
        data={allMessagesFilter}
        deleteRoomAction={(roomId: number) => props.deleteRoomAction(roomId)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  space: {
    position: 'absolute',
    width: '100%',
    height: 24,
    backgroundColor: colors.vulcan,
  },
  search: {
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  btnUp: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
