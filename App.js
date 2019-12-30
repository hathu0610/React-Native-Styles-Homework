/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PanResponder,
  TextInput,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Loginscreen, Homescreen, Getstartedscreen, Getstarted1} from "./app/component/screen"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
/*const App: () => React$Node = () => {

  return (
<View>
<Getstartedscreen />
</View>
  );

};
*/

const RootStack = createStackNavigator(
  {
    Home: Getstartedscreen,
    Secondscreen: Getstarted1
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
