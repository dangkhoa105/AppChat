import React from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import {Box} from '../box/box';
import {ItemSwipeProps} from './item-swipe.props';
import {colors} from '../../res';

const {width} = Dimensions.get('window');

export function ItemSwipe(props: ItemSwipeProps) {
  const {title, icon, bg, children} = props;
  const stylesContainer: any = {...styles.container, backgroundColor: bg};

  const showTitle = () => {
    if (title !== '') {
      const stylesIcon: any = {
        width: icon?.size,
        height: icon?.size,
        tintColor: icon?.color,
      };
      return (
        <Box row style={styles.wrapTitle}>
          <Image source={icon?.name} style={stylesIcon} resizeMode="contain" />
          <Text style={styles.title}>{title}</Text>
        </Box>
      );
    }
  };

  return (
    <Box style={stylesContainer}>
      <Box style={styles.header} />
      <Box style={styles.content}>
        {showTitle()}
        {children}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: '100%',
  },
  header: {
    height: '40%',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 99999,
    borderBottomRightRadius: 99999,
    transform: [{scaleX: 1.2}],
  },
  content: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.white,
    paddingLeft: 8,
  },
});

ItemSwipe.defaultProps = {
  title: '',
  bg: colors.vulcan,
};
