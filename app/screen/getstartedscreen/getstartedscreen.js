import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, ViewComponent, Alert, TouchableOpacity } from 'react-native'
import { styles } from './getstartedstyle'

export default class Getstartedscreen extends Component {


    ButtonClickCheckFunction = () => {

        this.props.navigation.navigate('Secondscreen')
    }


    render() {
        return (
            <View>
                <View >
                    <ImageBackground source={require('../../component/images/getstarted.jpg')} style={styles.img}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "flex-end" }}>
                            <View>
                                <View style={styles.roundbox}>
                                    <Image source={require('../../component/images/getstartedbgcolor.png')} />
                                </View>
                                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                                    <Text style={{ paddingTop: 30, color: 'white', fontSize: 40, fontWeight: 'bold', paddingBottom: 30 }}>Happy Meals</Text>
                                    <Text style={[styles.textndung], { paddingBottom: 20, color: 'white' }}>Discover the best foods from over 1,000 restaurants</Text>
                                    <View style={[styles.MainContainer], { height: 50, width: '70%' }}>
                                        <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity={.5} onPress={this.ButtonClickCheckFunction}>
                                            <Text style={styles.TextStyle}> Get Started </Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}
