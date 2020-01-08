import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
              <View style={{height: 50, backgroundColor: 'green'}}></View>
              <View  style={{width:'100%',height: 250,alignItems:'center'}}>
                <Scrollview horizontalornot = {true} imgw = {250}/>
              </View>
            </View>
          );  

  }
}
