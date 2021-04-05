import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

export interface IconTextColProps {
  title: string;

  icon: {
    name: ImageSourcePropType;
    color: string;
    size: number;
  };

  onPress: () => void;

  textStyle?: TextStyle;

  containerStyle?: ViewStyle | ViewStyle[];

  children?: any;
}
