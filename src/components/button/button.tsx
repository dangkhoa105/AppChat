import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from './button.props';

export function Button(props: ButtonProps) {
  const {style, onPress, children} = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  onPress: () => {},
};
