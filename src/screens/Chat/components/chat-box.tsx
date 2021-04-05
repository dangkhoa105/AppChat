import React from 'react';
import {FlatList} from 'react-native';
import {objectIsNull} from '../../../components';
import ItemChat from './item-chat';

interface ChatBoxProps {
  data: {
    messages: string[];
  };

  isExtend: boolean;

  isKeyBoardDidShow: boolean;
}

export default function ChatBox(props: ChatBoxProps) {
  const {data, isExtend, isKeyBoardDidShow} = props;
  const [messages, setMessages] = React.useState<string[]>([]);
  const refFlatList = React.useRef<any>(null);

  React.useEffect(() => {
    if (!objectIsNull(data)) {
      setMessages(data.messages);
    }
  }, [data]);

  React.useEffect(() => {
    if (messages.length > 0) {
      refFlatList.current.scrollToIndex({
        animated: true,
        index: messages.length - 1,
      });
    }
  }, [isExtend, isKeyBoardDidShow, messages]);

  const renderItem = ({item, index}: {item: any; index: any}) => {
    return <ItemChat item={item} index={index} />;
  };

  return (
    <FlatList
      data={messages}
      ref={refFlatList}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScrollToIndexFailed={() => {}}
      onContentSizeChange={() =>
        refFlatList.current?.scrollToEnd({animated: true})
      }
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 4,
        justifyContent: 'flex-end',
      }}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
