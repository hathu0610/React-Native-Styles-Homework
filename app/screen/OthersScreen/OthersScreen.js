import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import {styles} from './OtherscreenStyle'
import { SearchBar } from 'react-native-elements';
import Scrollview from "../../component/Scrollview"
export default class OthersScreen extends Component {
  render() {

          return (  
            <View style={{flex: 1,flexDirection: 'column',padding:30,paddingTop:50}}>
              <View style={{height: 70,}}> 
                  <SearchBar placeholder="Search foods..." lightTheme = {true} containerStyle={{backgroundColor:'white'}} inputContainerStyle={{backgroundColor:'lightgray'}}/>
              </View>
              <View style={{height: 50}}><Text style={{color:"#FF4E56",fontSize:25,fontWeight:'bold'}}>Popular Choices</Text></View>
              <View  style={{width:'100%',height: 220,alignItems:'center'}}>
                <Scrollview horizontalornot = {true} imgw = {250}/>
              </View>
              <View style={{height: 40}}><Text style={{color:"#FF4E56",fontSize:25,fontWeight:'bold'}}>New Restaurant</Text></View>
                <Scrollview  imgw = {150} flexdir = "row"/>
            </View>
          );  

  }
}
