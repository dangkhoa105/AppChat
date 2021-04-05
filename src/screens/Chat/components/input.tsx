import React from 'react';
import {Animated, Image, TextInput, Keyboard, StyleSheet} from 'react-native';
import {Box, Button} from '../../../components';
import {SearchBarProps} from '../../../components/search-bar/search-bar.props';
import {colors, images} from '../../../res';
import Extend from './extend';

const size = 24;
const time = 300;
const range1 = 45;
const range2 = 165;

interface InputProps {
  getIsExtend: (value: boolean) => void;

  getIsKeyBoardDidShow: (value: boolean) => void;

  onSend: (value: string) => void;
}

export default function Input(props: SearchBarProps & InputProps) {
  const {placeholder, getIsExtend, getIsKeyBoardDidShow, onSend} = props;
  const [isShowExtend, setIsShowExtend] = React.useState(false);
  const [text, setText] = React.useState('');
  const animated = new Animated.Value(0);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getIsExtend(isShowExtend);
  }, [getIsExtend, isShowExtend]);

  React.useEffect(() => {
    getIsExtend(isShowExtend);
  }, [getIsExtend, isShowExtend]);

  const keyboardDidShow = () => {
    getIsKeyBoardDidShow(true);
  };

  const keyboardDidHide = () => {
    getIsKeyBoardDidShow(false);
  };

  const fnAnimated = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: time,
      useNativeDriver: false,
    }).start(() => setIsShowExtend(!isShowExtend));
  };

  const spinAnimRight = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '0deg'],
  });
  const spinAnimLeft = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });
  const showInput = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [range2, range1],
  });
  const hideInput = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [range1, range2],
  });

  const styleImage: any = [
    styles.icon,
    {transform: [{rotate: isShowExtend ? spinAnimRight : spinAnimLeft}]},
  ];

  const animTranslateY: any = {
    height: isShowExtend ? showInput : hideInput,
  };

  const onPress = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <Animated.View style={animTranslateY}>
      <Box style={styles.container}>
        <Box style={styles.wrap}>
          <Button style={styles.wrapIcon} onPress={fnAnimated}>
            <Animated.Image source={images.ic_add} style={styleImage} />
          </Button>
          <TextInput
            value={text}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={(value) => setText(value)}
            onSubmitEditing={Keyboard.dismiss}
          />
        </Box>
        <Button style={styles.wrapIcon} onPress={onPress}>
          <Image source={images.ic_plane} style={styles.icon} />
        </Button>
      </Box>
      <Extend />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
  },
  wrapIcon: {
    paddingHorizontal: 16,
  },
  icon: {
    width: size,
    height: size,
    resizeMode: 'contain',
    tintColor: colors.vulcan,
  },
});

Input.defaultProps = {
  onSearching: () => {},
};
