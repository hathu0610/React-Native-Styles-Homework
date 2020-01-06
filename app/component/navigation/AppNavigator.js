//App after login
 import React, { Component } from 'react'
import { Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import {Homescreen} from '../../screen'
import Icon from 'react-native-vector-icons/Ionicons';  


  class ProfileScreen extends React.Component {  
    render() {  
      return (  
          <View style={styles.container}>  
            <Text>Profile Screen</Text>  
          </View>  
      );  
    }  
  }  
  class ImageScreen extends React.Component {  
      render() {  
          return (  
              <View style={styles.container}>  
                  <Text>Image Screen</Text>  
              </View>  
          );  
      }  
  }  
  class CartScreen extends React.Component {  
      render() {  
          return (  
              <View style={styles.container}>  
                  <Text>Cart Screen</Text>  
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
  
 const AppStack = createMaterialBottomTabNavigator(  
      {  
          Home: { screen: Homescreen,  
              navigationOptions:{  
                  tabBarLabel:'Home',  
                  tabBarIcon: ({ tintColor }) => (  
                      <View>  
                          <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                      </View>),  
                      activeColor: '#FF4E56',  
                      inactiveColor: 'grey',  
                      barStyle: { backgroundColor: 'white' },  
              }  
          },  
          Profile: { screen: ProfileScreen,  
              navigationOptions:{  
                  tabBarLabel:'Profile',  
                  tabBarIcon: ({ tintColor }) => (  
                      <View>  
                          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                      </View>),  
                   activeColor: '#FF4E56',  
                   inactiveColor: 'grey',  
                   barStyle: { backgroundColor: 'white' },  
              }  
          },  
          Image: { screen: ImageScreen,  
              navigationOptions:{  
                  tabBarLabel:'History',  
                  tabBarIcon: ({ tintColor }) => (  
                      <View>  
                          <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                      </View>),  
                  activeColor: '#FF4E56',  
                  inactiveColor: 'grey',  
                  barStyle: { backgroundColor: 'white' },   
              }  
          },  
          Cart: {  
              screen: CartScreen,  
              navigationOptions:{  
                  tabBarLabel:'Cart',  
                  tabBarIcon: ({ tintColor }) => (  
                      <View>  
                          <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                      </View>),  
                       activeColor: '#FF4E56',  
                       inactiveColor: 'grey',  
                       barStyle: { backgroundColor: 'white' },  
              }  
          },  
      },  
      {  
        initialRouteName: "Home",  
        activeColor: '#f0edf6',  
        inactiveColor: '#226557',  
        barStyle: { backgroundColor: 'white' },  
      },  
  );  
    /*
   import React, { Component } from 'react'
   import { Text, View } from 'react-native'
   import Loginscreen from '../../screen'
   const AppStack = createStackNavigator({ Loginscreen });
   */
  export default AppStack;
