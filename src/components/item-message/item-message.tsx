import React from 'react';
import {Text, Dimensions, ScrollView, Image, StyleSheet} from 'react-native';
import {Box} from '../box/box';
import {Button} from '../button/button';
import {useNavigation} from '@react-navigation/core';
import {colors, images} from '../../res';
import {ItemMessageProps} from './item-message.props';
import moment from 'moment';

const {width} = Dimensions.get('window');
const size = 20;

export function ItemMessage(props: ItemMessageProps) {
  const navigation = useNavigation();
  const {item, index, indexScroll, setIndexScroll, onDelete} = props;
  const refScrollView = React.useRef<any>(null);
  const time = moment(item?.latestTime).calendar(null, {
    sameDay: 'h:mm A',
    lastDay: '[yesterday] h:mm A',
    lastWeek: 'DD MMM, yyyy',
    sameElse: 'DD MMM, yyyy',
  });
  React.useEffect(() => {
    if (index !== indexScroll) {
      refScrollView.current.scrollTo({x: 0, animated: true});
    }
  }, [index, indexScroll]);

  const onPress = () => {
    onDelete(item?.roomId);
    setIndexScroll(-1);
  };

  return (
    <ScrollView
      ref={refScrollView}
      onScrollBeginDrag={() => setIndexScroll(index)}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Button
        style={{width: width - 16}}
        onPress={() =>
          navigation.navigate('Chat', {name: item?.name, roomId: item?.roomId})
        }>
        <Box row style={styles.container}>
          <Box style={styles.wrapAvatar}>
            <Text style={styles.textAvatar}>{item?.name[0]}</Text>
          </Box>
          <Box style={styles.wrapContent}>
            <Box row style={styles.wrapName}>
              <Text style={styles.txtName}>{item?.name}</Text>
              <Text style={styles.txtTime}>{time}</Text>
            </Box>
            <Text numberOfLines={1} style={styles.txtContent}>
              {item?.latestMessage}
            </Text>
          </Box>
        </Box>
      </Button>
      <Button style={styles.btnDelete} onPress={onPress}>
        <Image
          source={images.ic_bin}
          resizeMode="contain"
          style={styles.imgDelete}
        />
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 0.5,
    borderRadius: 2,
  },
  wrapAvatar: {
    backgroundColor: colors.vulcan,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
  },
  textAvatar: {
    fontSize: 22,
    color: colors.white,
  },
  wrapContent: {
    flex: 1,
    marginLeft: 16,
  },
  wrapName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    fontSize: 15,
  },
  txtTime: {
    fontSize: 10,
    color: colors.gray_500,
  },
  txtContent: {
    fontSize: 12,
    color: colors.gray_650,
    paddingRight: 20,
  },
  btnDelete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.red,
  },
  imgDelete: {
    width: size,
    height: size,
  },
});

ItemMessage.defaultProps = {
  item: {
    name: '',
    time: '',
    content: '',
  },
};
