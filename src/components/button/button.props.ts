import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonProps {
  style?: StyleProp<ViewStyle>;

  onPress?: () => void;

  children?: any;
}
