import React, { Component } from 'react'
import { Text, View,ScrollView,Image } from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        return (
            <View style={{width: 100,height:100,alignItems:'center'}}>
            <View style={{width: 80,height:80}}><Image style={{resizeMode:'contain',width: 80,height:80,}} source={this.props.src}></Image></View>
            <View><Text style={{fontWeight:'bold'}}>{this.props.name}</Text></View>
            </View>
        )
    }
}
