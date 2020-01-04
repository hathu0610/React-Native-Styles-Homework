import React, { Component } from 'react'
import { Text, View,TextInput,useState,TouchableOpacity,AsyncStorage } from 'react-native'
import {styles} from './registerstyle' 
import ThuButton from '../../component/ThuButton'

export default class Registerscreen extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          password:''
        }
     }
    ButtonClickLogInScreen = () => {
        this.props.navigation.navigate('Loginscreen')
    }
    handleTextChange = (key,value) => {
        this.setState({[key]:value})
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(this.state.username, this.state.pass);
            this.props.navigation.navigate('Loginscreen')
        } catch (error) {
            // Error saving data
        }
    }
    render() {
        return (
            <View style ={styles.root}>
                <View styles = {{width:'70%'}}>
                <Text style={[styles.textheading,{fontSize:40,lineHeight: 50,paddingTop:50}]}>Create your account</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                <TextInput style={[styles.SubmitFormStyle]} activeOpacity = { .5 } placeholder = "Username" onChangeText={(text)=>{ this.handleTextChange('username',text)}} />
                <TextInput style={[styles.SubmitFormStyle]} activeOpacity = { .5 } placeholder = "Password" onChangeText={(text)=>{ this.handleTextChange('pass',text)}} />


                <ThuButton title="Register" buttonclick = {this._storeData} />

                <View style={{alignItems:'center',width: 200, height: 70}}>
                <Text style={[styles.textndung,{color:'black',textAlign:'center',paddingTop:20}]}>By clicking sign up you agree to our terms and condition</Text>
                </View>
                </View>
            </View>
        )
    } 
}
