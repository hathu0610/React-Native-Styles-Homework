import React, { Component } from 'react'
import { Text, View,TextInput,AsyncStorage, Alert } from 'react-native'
import {styles} from '../registerscreen/registerstyle' 
import ThuButton from '../../component/ThuButton'
import { SafeAreaView } from 'react-navigation'

export default class Loginscreen extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          password:'',
          register: ''

        }
     }
    ButtonClickDkiScreen = () => {
        this.props.navigation.navigate('Registerscreen')
    }
   handleChangeInputUsername = () => {
       console.log(this.state.username)
       console.log(this.state.password)
    }
    handleTextChange = (key,value) => {
        this.setState({[key]:value})
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem(this.state.username);
            if (value !== null) {
                // Our data is fetched successfully
                
                if (value === this.state.password){
                    this.setState({register:"pass"})
                } 
                else {
                    this.setState({register:"Wrong password. Try again"})
                }
            }
            else {
                this.setState({register:"Can't find any account with this name. You need to create a new account"})
            }
        } catch (error) {        }
    }

    render() {
        const { username } = this.state
        return (
        <View>
                <View styles = {{width:'70%'}}>
                <Text style={[styles.textheading,{fontSize:40,lineHeight: 50,paddingTop:50}]}>Log in to your account </Text>
                </View> 
                <View style={{alignItems:'center'}}>
               <TextInput style={[styles.SubmitFormStyle]} activeOpacity = { .5 } placeholder = "Username"  onChangeText={(text)=>{ this.handleTextChange('username',text) }}/>
                <TextInput style={[styles.SubmitFormStyle]} activeOpacity = { .5 } placeholder = "Password"  onChangeText={(text)=>{ this.handleTextChange('password',text) }}/>
                <ThuButton title="Submit"  buttonclick ={this._retrieveData} />
                <ThuButton title="Create new account"  buttonclick ={this.ButtonClickDkiScreen} />
                </View>
                <View style={{alignItems:'center'}}><Text style={[styles.textndung,{width:'80%',color:'black',textAlign:'center',paddingTop:20}]}>{this.state.register}</Text></View>
        </View> 
        )
    }
}
