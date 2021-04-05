import moment from 'moment';
import {PermissionsAndroid} from 'react-native';
import {permissions} from '../../res/profile';

export const objectIsNull = (obj: any) => {
  if (obj === null || obj === undefined || obj === 'undefined') {
    return true;
  }
  return false;
};

export const arrayIsEmpty = (arr: string[]) => {
  if (arr.length === 0) {
    return true;
  }
  return false;
};

export const formatTimeChat = (date: string) => {
  const day: string = moment(date).format('ddd');
  const time: string = moment(date).format('hh:mmA');

  return day + ' • ' + time;
};

export const permissionsAndroid = async (type: string) => {
  let result: boolean = false;
  switch (type) {
    case permissions.CAMERA:
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          result = true;
        }
      } catch (err) {}
      break;

    default:
      break;
  }

  return result;
};
