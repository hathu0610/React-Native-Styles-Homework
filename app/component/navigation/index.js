import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthHandler from './AuthHandler';
import Auth from './AuthNavigator';
import AppStack from './AppNavigator';

export default createAppContainer( // eslint-disable-line
  createSwitchNavigator(
    {
        AppStack,
        Auth,
        AuthHandler,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
); // eslint-disable-line