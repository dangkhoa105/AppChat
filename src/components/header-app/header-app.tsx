import React from 'react';
import {Image, StyleSheet, Text, TextStyle} from 'react-native';
import {Box} from '../../components/box/box';
import {Button} from '../button/button';
import {colors} from '../../res';
import {getConditions, getStylesContainer} from './function';
import {HeaderAppProps} from './header-app.props';

export function HeaderApp(props: HeaderAppProps) {
  const {
    title,
    paddingVertical,
    bg,
    textColor,
    iconLeft,
    onPressIconLeft,
    iconRight,
    onPressIconRight,
  } = props;
  const stylesContainer: any = getStylesContainer(bg, iconLeft, iconRight);
  const stylesBtnRight: any =
    getConditions(iconLeft, iconRight) === 2 ? styles.btnRight : {};
  const styleTitle: TextStyle =
    getConditions(iconLeft, iconRight) === 1
      ? {fontSize: 18, color: textColor, paddingVertical, paddingLeft: 32}
      : {fontSize: 18, color: textColor, paddingVertical};
  const stylesIconLeft: any = {
    width: iconLeft?.size,
    height: iconLeft?.size,
    tintColor: iconLeft?.color,
  };
  const stylesIconRight: any = {
    width: iconRight?.size,
    height: iconRight?.size,
    tintColor: iconRight?.color,
  };

  const showIconLeft = () => {
    if (
      getConditions(iconLeft, iconRight) === 0 ||
      getConditions(iconLeft, iconRight) === 1
    ) {
      return (
        <Button onPress={onPressIconLeft}>
          <Image
            source={iconLeft?.name}
            style={stylesIconLeft}
            resizeMode="contain"
          />
        </Button>
      );
    }
  };
  const showIconRight = () => {
    if (
      getConditions(iconLeft, iconRight) === 0 ||
      getConditions(iconLeft, iconRight) === 2
    ) {
      return (
        <Button style={stylesBtnRight} onPress={onPressIconRight}>
          <Image
            source={iconRight?.name}
            style={stylesIconRight}
            resizeMode="contain"
          />
        </Button>
      );
    }
  };

  return (
    <Box style={stylesContainer}>
      {showIconLeft()}
      <Text style={styleTitle}>{title}</Text>
      {showIconRight()}
    </Box>
  );
}

const styles = StyleSheet.create({
  btnRight: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
  },
});

HeaderApp.defaultProps = {
  bg: colors.vulcan,
  paddingVertical: 18,
  textColor: colors.white,
  onPressIconLeft: () => {},
  onPressIconRight: () => {},
};
