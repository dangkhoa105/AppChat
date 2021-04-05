import {ViewStyle} from 'react-native';

export interface BoxProps {
  style?: ViewStyle | ViewStyle[];

  children?: any;

  full?: boolean;

  row?: boolean;
}
