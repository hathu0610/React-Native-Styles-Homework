import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {styleheader} from './headerstyle'
export default class Header1 extends Component {
    render() {
        return (
            <View style = {{flex:1}}> 
            <View style = {styleheader.head}> 
              <Text>Goinsider</Text>
              <View style = {{flexDirection: 'row'}}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri:'https://image.flaticon.com/icons/png/512/116/116836.png'}}
              />
                <Image
                style={{width: 50, height: 50}}
                source={{uri:'https://image.flaticon.com/icons/png/512/116/116836.png'}}
              />
            </View>
            </View>
          </View>
        )
    }
}