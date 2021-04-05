import React from 'react';
import {SafeAreaView} from 'react-native';
import GetStartedScreen from '../../screens/GetStarted/GetStartedScreen';

export default function GetStartedContainer(props: any) {
  return (
    <SafeAreaView>
      <GetStartedScreen {...props} />
    </SafeAreaView>
  );
}
