import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import ThuButton from '../../component/ThuButton'
import Scrollview from "../../component/Scrollview"

export default class OffersScreen extends Component {
    render() {
        return (
            <View style = {{backgroundColor:"#FF4E56",height:'100%',flex:1}}>  
                <View style={{height:200,marginTop:70,margin:20,flexDirection:'row'}}>

                    <View style={{width:'50%'}}>
                    <View style={{height:50}}>
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Latest Offers</Text>
                    </View>
                    <View style={{height:60}}>
                        <Text style={{color:'white',fontSize:15}}>Find discount, offers,special meals and more!</Text>
                    </View>
                    <View style={{height:150}}>
                        <ThuButton title = "20 Restaurants" buttoncolor = "white" textcolor ="black" weight = "bold"/>
                    </View>
                    </View>

                    <View>
                        <Image style={{resizeMode:'contain',width: 200,height:200,}} source = {require('../../component/images/delivery.png')}></Image>
                    </View>

                </View>

                <View style={{backgroundColor:"white",borderRadius:20,padding:30}}>
                <Scrollview horizontalornot = {false} />
                </View>
            </View>  
        )
    }
}
