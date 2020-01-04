import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {styles} from '../../screen/registerscreen/registerstyle' 
export default class ThuButton extends PureComponent {
    render() {
        return (
            <View>
            <TouchableOpacity style={[styles.SubmitFormStyle,{backgroundColor:'#FF4E56',alignItems:'center',paddingRight: 20}]} activeOpacity = { .5 } onPress={ this.props.buttonclick }>
            <Text style={[styles.TextStyle,{color:'white'}]}>{this.props.title}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}



