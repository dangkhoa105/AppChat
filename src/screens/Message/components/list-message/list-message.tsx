import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Box, ItemMessage} from '../../../../components';
import {colors} from '../../../../res';
import {ListMessageProps} from './list-message.props';

export function ListMessage(props: ListMessageProps) {
  const {title, data, deleteRoomAction} = props;
  const [listMessage, setListMessages] = React.useState(data);
  const [indexScroll, setIndexScroll] = React.useState(-1);

  React.useEffect(() => {
    return setListMessages(data);
  }, [data]);

  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <ItemMessage
        key={index.toString()}
        item={item}
        index={index}
        indexScroll={indexScroll}
        setIndexScroll={(value: number) => setIndexScroll(value)}
        onDelete={(roomId: number) => deleteRoomAction(roomId)}
      />
    );
  };

  return (
    <Box full style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={listMessage}
        onScroll={() => setIndexScroll(-1)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    paddingBottom: 8,
    fontSize: 12,
    color: colors.gray_650,
  },
});

ListMessage.defaultProps = {
  title: '',
  data: [],
};
