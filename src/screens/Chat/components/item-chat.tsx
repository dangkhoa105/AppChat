import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box, formatTimeChat} from '../../../components';
import {colors, getNameChat} from '../../../res';
import {userProfile} from '../../../res/profile';

interface ItemChatProps {
  item?: any;

  index?: any;
}

export default function ItemChat(props: ItemChatProps) {
  const {item} = props;
  const checkUser = item.uid === userProfile.uid;
  const alignSelf: any = checkUser ? 'flex-end' : 'flex-start';
  const name: any = getNameChat(item.uid)?.name;

  const showAvatar = () => {
    return (
      !checkUser && (
        <Box style={styles.wrapAvatar}>
          <Text style={styles.textAvatar}>{name[0]}</Text>
        </Box>
      )
    );
  };

  return (
    <Box style={[styles.container, {}]}>
      <Text style={styles.txtTime}>{formatTimeChat(item.time)}</Text>
      <Box style={[styles.wrap, {alignSelf}]}>
        {showAvatar()}
        <Box style={styles.wrapText}>
          <Text style={styles.txtMessage}>{item.message}</Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtTime: {
    fontSize: 11,
    color: colors.gray_500,
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 4,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapAvatar: {
    backgroundColor: colors.vulcan,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
    marginHorizontal: 8,
  },
  textAvatar: {
    fontSize: 22,
    color: colors.white,
  },
  wrapText: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 4,
    marginHorizontal: 8,
    borderRadius: 20,
    maxWidth: '60%',
  },
  txtMessage: {
    color: colors.vulcan,
  },
});
