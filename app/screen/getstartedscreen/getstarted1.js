import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity  } from 'react-native'
import {styles} from './getstartedstyle'

export default class Getstarted1 extends Component {
    ButtonClickCheckFunction = () =>{

        this.props.navigation.navigate('Home')
    
    }
    ButtonClickRGScreen = () =>{

        this.props.navigation.navigate('Registerscreen')
    
    }
    ButtonClickLoginScreen = () =>{

        this.props.navigation.navigate('Loginscreen')
    
    }
    render() {
        return (
            <View >
                <View style={{flexDirection:'row-reverse',padding:10}}> 
                    <Text style={styles.text} onPress={ this.ButtonClickLoginScreen }>Log in</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Image style={{width:300,height:300,}}source={require('../../component/images/getstarted1.png')}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.textheading}>Find food you love</Text>
                    <View style={{width: 200, height: 70}}>
                    <Text style={[styles.textndung,{color:'black',textAlign:'center'}]}>Discover the best foods from over 1000 restaurants</Text>
                </View>
                <View style={{backgroundColor:'white',height:50,width:'100%'}}></View>
                </View>
                <View style={{alignItems:'center',height: 120,justifyContent:'space-between'}}>
                    <View style={{alignItems:'center',height:50,width:'100%'}}>
                <TouchableOpacity style={[styles.SubmitButtonStyle,{backgroundColor:'#FF4E56'}]} activeOpacity = { .5 } onPress={ this.ButtonClickRGScreen}>
            <Text style={[styles.TextStyle,{color:'white'}]}> Create account </Text>
            
            </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',height:50,width:'100%'}}>
            <TouchableOpacity style={[styles.SubmitButtonStyle,{backgroundColor:'grey'}]} activeOpacity = { .5 } onPress={ this.ButtonClickCheckFunction }>
            <Text style={[styles.TextStyle,{color:'white'}]}> Continue with Facebook </Text>
            
                </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}
