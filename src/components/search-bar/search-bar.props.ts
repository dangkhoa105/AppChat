import {ViewStyle} from 'react-native';

export interface SearchBarProps {
  stylesContainer?: ViewStyle | ViewStyle[];

  value?: string;

  placeholder?: string;

  onSearching?: (v: string) => void;
}
