import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
  textheading:{
    color: '#FF4E56',
  fontSize: 30,
  fontWeight:'bold',
    padding:30
  },
  textndung:{
  color:'white',
  fontSize:15, },
text:{
  color: '#FF4E56',
  fontSize: 20
},
img:{
    width: '100%', 
    height: '100%'
},
roundbox:{
    width: 300,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    transform: [{ scaleX: 1.38 }]
},
MainContainer: {
    flex: 1,
    paddingTop: 30
  },
  SubmitButtonStyle: {

    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor:'white',
  },
 
  TextStyle:{
      color:'black',
      textAlign:'center',
      fontWeight:'bold'
  }
});