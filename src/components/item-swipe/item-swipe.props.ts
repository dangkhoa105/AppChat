import {ImageSourcePropType} from 'react-native';

interface Icon {
  name: ImageSourcePropType;
  size: number;
  color: string;
}

export interface ItemSwipeProps {
  title?: string;

  icon?: Icon | any;

  bg?: string;

  children?: any;
}
