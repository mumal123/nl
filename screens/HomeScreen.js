import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
 
  
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.props.navigation.navigate("JokeScreen")}>
            <Text style={styles.buttonText}>Joke</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.props.navigation.navigate("HoroscopeScreen")}>
            <Text style={styles.buttonText}>Horoscope</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.props.navigation.navigate("NewsScreen")}>
            <Text style={styles.buttonText}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"pink"}]} 
            onPress={()=>this.props.navigation.navigate("WeatherScreen")}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})