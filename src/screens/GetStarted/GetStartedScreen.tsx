import React from 'react';
import {Text, Image, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ItemSwipe, Swipe} from '../../components';
import {colors, images} from '../../res';

const {height} = Dimensions.get('window');

export default function GetStartedScreen() {
  const navigation = useNavigation();
  const iconItem1: any = {name: images.ic_message, size: 30};
  const iconItem3: any = {name: images.ic_plane, size: 30};
  return (
    <Swipe onPressFinish={() => navigation.navigate('Message')}>
      <ItemSwipe title="Message" icon={iconItem1}>
        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
        </Text>
      </ItemSwipe>
      <ItemSwipe title="Feature">
        <Image
          source={images.background}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.txt}>
          Connecting with your parents/lover/friends
        </Text>
      </ItemSwipe>
      <ItemSwipe title="Let's go" icon={iconItem3} />
    </Swipe>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 44,
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
    top: -height / 3,
    height: height / 2,
  },
});
