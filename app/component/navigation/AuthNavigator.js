//Login screen, Create acc screen, Started screen
import { createStackNavigator } from 'react-navigation-stack';
import {Registerscreen, Getstartedscreen, Getstarted1,Loginscreen} from "../../screen"


const AuthStack = createStackNavigator({   
    Home: Getstartedscreen,
    Secondscreen: Getstarted1,
    Registerscreen: Registerscreen,
    Loginscreen: Loginscreen,
  },
  {
    initialRouteName: 'Home',
  });

export default AuthStack;