import {ImageSourcePropType} from 'react-native';

interface Icon {
  name: ImageSourcePropType;
  size: number;
  color: string;
}

export interface HeaderAppProps {
  paddingVertical?: number;

  bg?: string;

  textColor?: string;

  title: string;

  iconLeft?: Icon | any;

  onPressIconLeft?: () => void;

  iconRight?: Icon | any;

  onPressIconRight?: () => void;
}
