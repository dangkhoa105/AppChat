import React from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';
import {Box} from '../box/box';
import {Button} from '../button/button';
import {SwipeProps} from './swipe.props';
import {colors} from '../../res';

const {width} = Dimensions.get('window');

export function Swipe(props: SwipeProps) {
  const {onPressFinish, children} = props;
  const [index, setIndex] = React.useState(0);
  const scrollRef = React.useRef<any>(null);
  const dots = new Array(children.length).fill(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  const onPressSkip = () => {
    scrollRef.current.scrollTo({
      x: width * (dots.length - 1),
      animated: true,
    });
  };

  const showListDot = () => {
    return dots.map((_, i) => {
      const widthItem = i === index ? 20 : 10;
      const opacity = i === index ? 1 : 0.5;
      return (
        <Box
          key={i.toString()}
          style={[styles.dot, {width: widthItem, opacity}]}
        />
      );
    });
  };

  const showButton = () => {
    if (index === dots.length - 1) {
      return (
        <Button onPress={onPressFinish}>
          <Text style={styles.txtSkip}>Finish</Text>
        </Button>
      );
    }
    return (
      <Button onPress={onPressSkip}>
        <Text style={styles.txtSkip}>Skip</Text>
      </Button>
    );
  };

  return (
    <Box style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={onScroll}
        horizontal>
        {children}
      </ScrollView>
      <Box row style={styles.containerSkip}>
        <Box row>{showListDot()}</Box>
        {showButton()}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerSkip: {
    width,
    position: 'absolute',
    bottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 27,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 9999,
    backgroundColor: colors.white,
    marginLeft: 5,
  },
  txtSkip: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});
