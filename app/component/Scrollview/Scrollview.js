import React, { Component } from 'react'
import { Text, View,ScrollView,Image } from 'react-native'
import {styles} from '../../screen/Homescreen/homescreenstyle' 

export default class Scrollview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [
              {name: "Gongcha", sourc: require('../../component/images/food/gongcha.jpg'),des:"Western • Cafe • $$"},
              {name:"Hot Pot", sourc: require('../../component/images/food/lau.jpg'),des:"Western • Cafe • $$"},
              {name:"Stir-fry Noodles", sourc: require('../../component/images/food/myxao.jpg'),des:"Western • Cafe • $$"},
          ],
        }
      }
    render() {
        return (
            <ScrollView horizontal = {this.props.horizontalornot} >
            {this.state.food.map((item, key) =>
            <View style={{width: this.props.imgw,height: 220,alignItems:'center',paddingRight:10,flexDirection:this.props.flexdir,justifyContent:'flex-start'}}>
              <View style={{width: '100%',height: 150,paddingRight:10}}><Image style={{width: '100%',height: 150,resizeMode:'cover'}} source={item.sourc}></Image></View>
              <View style ={{paddingBottom:60,width:'100%'}}> 
              <View style={{width: '100%',height: 30,paddingTop:5}}>
                <Text style={[styles.textboldname,{color:'black'}]}>{item.name}</Text>
              </View>
              <View style={{width: '100%',height: 60}}>
              <Text style={[styles.textndung,{color:"#FF4E56"}]}>{item.des}</Text>
               </View>
                </View>
            </View> 
            )}
            </ScrollView>
        )
    }
}
