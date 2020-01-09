import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {styles} from '../../screen/registerscreen/registerstyle' 
export default class ThuButton extends PureComponent {
    render() {
        return (
            <View>
            <TouchableOpacity style={[styles.SubmitFormStyle,{backgroundColor:this.props.buttoncolor,alignItems:'center',paddingRight: 20}]} activeOpacity = { .5 } onPress={ this.props.buttonclick }>
            <Text style={[styles.TextStyle,{color:this.props.textcolor,fontWeight: this.props.weight}]}>{this.props.title}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}



