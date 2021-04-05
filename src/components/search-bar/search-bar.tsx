import React from 'react';
import {Image, TextInput, StyleSheet} from 'react-native';
import {Box} from '../box/box';
import {SearchBarProps} from './search-bar.props';
import {colors, images} from '../../res';
import {Button} from '../button/button';

const size = 24;

export function SearchBar(props: SearchBarProps) {
  const {stylesContainer, value, placeholder, onSearching} = props;
  const container: any = [styles.container, stylesContainer];

  return (
    <Box style={container}>
      <Box style={styles.wrap}>
        <Box style={styles.wrapIcon}>
          <Image source={images.ic_search} style={styles.icon} />
        </Box>
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onSearching}
        />
      </Box>
      <Button style={styles.wrapIcon}>
        <Image source={images.ic_voice} style={styles.icon} />
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  wrapIcon: {
    paddingHorizontal: 16,
  },
  icon: {
    width: size,
    height: size,
    resizeMode: 'contain',
  },
});

SearchBar.defaultProps = {
  onSearching: () => {},
};
