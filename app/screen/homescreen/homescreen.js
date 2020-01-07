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
        ],
        food: [
          {name: "Gongcha", sourc: require('../../component/images/food/gongcha.jpg'),des:"Western • Cafe • $$"},
          {name:"Hot Pot", sourc: require('../../component/images/food/lau.jpg'),des:"Western • Cafe • $$"},
          {name:"Stir-fry Noodles", sourc: require('../../component/images/food/myxao.jpg'),des:"Western • Cafe • $$"},
      ],
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
        <ScrollView >
        {this.state.food.map((item, key) =>
        <View style={{height: 220,alignItems:'center',padding:10}}>
          <View style={{width: '100%',height: 150}}><Image style={{width: '100%',height: 150,resizeMode:'cover'}} source={item.sourc}></Image></View>
          <View style={{width: '100%',height: 30,paddingTop:5}}>
            <Text style={[styles.textboldname,{color:'black'}]}>{item.name}</Text>
          </View>
          <View style={{width: '100%',height: 60}}>
          <Text style={[styles.textndung,{color:"#FF4E56"}]}>{item.des}</Text>

            </View>

        </View> 
        )}
        </ScrollView>
      </View>
      
      );  
    }  
  }  

  /*       let data = [{
        value: 'Home1',
      }, {
        value: 'Home2',
      }];
      let fontsize = 30;
            return (  
          <View >  
          <View style ={{width: '80%',marginLeft:50,marginTop:80}}>
            <Text style={styles.textndung}>Delivering to</Text>
          </View>   
        <View style={{width: '80%',marginLeft:45}}>
        <Dropdown
        label='Current location'
        data={data}
        labelFontSize = {fontsize}
        fontSize = {fontsize}
        textColot = 'black'
        baseColor ='black'
      />
      </View>
      <View style={{width: '80%',marginLeft:30}}>
      <SearchBar
        ref='searchBar'
        placeholder='Search'
      />
      </View>
      </View>  
      
      );  */