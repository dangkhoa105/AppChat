import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetStartedContainer from '../containers/GerStartedContainer/GetStartedContainer';
import MessageContainer from '../containers/MessageContainer/MessageContainer';
import ChatContainer from '../containers/ChatContainer/ChatContainer';
import {store} from '../redux/store';
type RootStackParamList = {
  GetStarted: undefined;
  Message: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStartedContainer} />
        <Stack.Screen name="Message" component={MessageContainer} />
        <Stack.Screen name="Chat" component={ChatContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
