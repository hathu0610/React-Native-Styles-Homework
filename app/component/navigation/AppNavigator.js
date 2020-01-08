//App after login
 import React, { Component } from 'react'
import { Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import {Homescreen,OthersScreen} from '../../screen'
import { Icon } from 'react-native-elements'

  class AccountScreen extends React.Component {  
      render() {  
          return (  
              <View style={styles.container}>  
                  <Text>Account Screen</Text>  
              </View>  
          );  
      }  
  }  
  const styles = StyleSheet.create({  
      container: {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center'  
      },  
  });  
  const AppStack = createBottomTabNavigator ({
      'Home': {screen: Homescreen,
                navigationOptions:{  
                    tabBarLabel:'Home',  
                    tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,  
                },
      }
      ,
      'Others': {screen: OthersScreen,
        navigationOptions:{  
            tabBarLabel:'Others',  
            tabBarIcon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />,  
        },
}
,
      'Account': {screen: AccountScreen,  
      navigationOptions:{  
          tabBarLabel:'Account',  
          tabBarIcon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />,  
              }
             }   ,
  },{  
    initialRouteName: "Home",  
    tabBarOptions: {
        activeTintColor: '#FF4E56',
        inactiveTintColor: 'gray',
      }, 
    barStyle: { backgroundColor: 'white' },  
  }, 
  );
  export default AppStack;
