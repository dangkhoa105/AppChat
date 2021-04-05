import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, IconTextCol, permissionsAndroid} from '../../../components';
import {colors, images} from '../../../res';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {permissions} from '../../../res/profile';

const icon = {
  iconFile: {
    name: images.ic_file,
    size: 24,
    color: colors.white,
  },
  iconPicture: {
    name: images.ic_photo_camera,
    size: 24,
    color: colors.white,
  },
  iconAudio: {
    name: images.ic_mic,
    size: 24,
    color: colors.white,
  },
  iconVideo: {
    name: images.ic_video_cam,
    size: 24,
    color: colors.white,
  },
};

export default function Extend() {
  const {iconFile, iconPicture, iconAudio, iconVideo} = icon;

  const showImagePicker = () => {
    if (permissionsAndroid(permissions.CAMERA)) {
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
        },
        (response) => {
          console.log(response);
        },
      );
    }
  };

  const launchVideo = () => {
    if (permissionsAndroid(permissions.CAMERA)) {
      launchCamera({mediaType: 'video'}, (response) => {
        console.log(response);
      });
    }
  };

  return (
    <Box row style={styles.container}>
      <IconTextCol title="File" icon={iconFile} />
      <IconTextCol
        title="Picture"
        icon={iconPicture}
        onPress={showImagePicker}
      />
      <IconTextCol title="Audio" icon={iconAudio} />
      <IconTextCol title="Video" icon={iconVideo} onPress={launchVideo} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.vulcan,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32,
  },
});
