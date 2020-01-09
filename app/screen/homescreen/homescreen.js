import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView,Image,ScrollView} from 'react-native'
import {styles} from './homescreenstyle' 
import ModalDropdown from 'react-native-modal-dropdown';
import { SearchBar } from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import HorizontalScrollView from "../../component/HorizontalScrollView"
import Scrollview from "../../component/Scrollview"
MaterialIcons.loadFont()

export default class Homescreen extends Component  {  
  constructor(props) {
    super(props);
    this.state = {
        img: [
            {name: "beer", sourc: require('../../component/images/png/beer.png')},
            {name:"biscuit", sourc: require('../../component/images/png/biscuit.png')},
            {name:"burger", sourc: require('../../component/images/png/burger.png')},
            {name:"carrot", sourc: require('../../component/images/png/carrot.png')},
            {name:"chicken", sourc: require('../../component/images/png/chicken.png')},
            {name:"coke", sourc: require('../../component/images/png/coke.png')},
        ]
    }
  }
    render() {  

            return (  
      <View style={{flex: 1,flexDirection: 'column',padding:30,paddingTop:50}}>
        <View style={{height: 20, }}>
          <Text style={styles.textndung}>Delivering to</Text>
        </View>
        <View style={{height: 30,}}> 
        <ModalDropdown defaultValue="Current location " textStyle={styles.textboldname} options={['option 1', 'option 2']}/>
        </View>
        <View style={{height: 70,}}> 
        <SearchBar placeholder="Search foods..." lightTheme = {true} containerStyle={{backgroundColor:'white'}} inputContainerStyle={{backgroundColor:'lightgray'}}/>
        </View>
        <View style={{height: 100}}> 
        <SafeAreaView style={styles.containersv}>
        <ScrollView horizontal={true}>
        {this.state.img.map((item, key) =>
              <HorizontalScrollView src={item.sourc} name = {item.name}></HorizontalScrollView>
        )}
        </ScrollView>
        </SafeAreaView>
        </View>
        <Scrollview horizontalornot = {false} />
      </View>
      
      );  
    }  
  }  

