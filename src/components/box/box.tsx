import React from 'react';
import {View} from 'react-native';
import {BoxProps} from './box.props';

export function Box(props: BoxProps) {
  const {full, row, style, children} = props;
  const styleOver: any = [
    style,
    full && {flex: 1},
    row && {flexDirection: 'row'},
  ];

  return <View style={styleOver}>{children}</View>;
}
