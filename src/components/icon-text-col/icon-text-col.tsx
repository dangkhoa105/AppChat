import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../res';
import {Button} from '../button/button';
import {IconTextColProps} from './icon-text-col.props';

export function IconTextCol(props: IconTextColProps) {
  const {title, icon, onPress, containerStyle, textStyle} = props;
  const stylesBtn: any = [styles.btn, containerStyle];
  const styleImage: any = {
    width: icon.size,
    height: icon.size,
    tintColor: icon.color,
  };
  return (
    <Button style={stylesBtn} onPress={onPress}>
      <Image source={icon.name} style={styleImage} resizeMode="contain" />
      <Text style={textStyle}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

IconTextCol.defaultProps = {
  onPress: () => {},
  textStyle: {
    color: colors.white,
    paddingTop: 12,
  },
};
