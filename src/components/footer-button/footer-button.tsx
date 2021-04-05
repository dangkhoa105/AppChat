import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {colors, images} from '../../res';
import {Button} from '../button/button';
import {FooterButtonProps} from './footer-button.props';

const size = 16;

const FooterButton = React.forwardRef((props: FooterButtonProps, ref: any) => {
  React.useImperativeHandle(ref, () => ({
    goToTop: () => goToTop(),
  }));

  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (props.isScrollDown) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [fadeAnim, props.isScrollDown]);

  const goToTop = () => {
    props.refScrollView.current.scrollTo({y: 0, animated: true});
  };

  return (
    <Animated.View style={[styles.btn, {opacity: fadeAnim}]}>
      <Button onPress={() => goToTop()}>
        <Image resizeMode="contain" source={images.ic_up} style={styles.img} />
      </Button>
    </Animated.View>
  );
});

export default FooterButton;

const styles = StyleSheet.create({
  btn: {
    width: size * 2,
    height: size * 2,
    position: 'absolute',
    bottom: size,
    right: size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.vulcan,
    borderRadius: 9999999,
  },
  img: {
    width: size * 1.5,
    height: size * 1.5,
    tintColor: colors.white,
  },
});
