import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import JokeScreen from './screens/JokeScreen'
import NewsScreen from './screens/NewsScreen'
import HoroscopeScreen from './screens/HoroscopeScreen'
import WeatherScreen from './screens/WeatherScreen'



import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen:JokeScreen,
  NewsScreen:NewsScreen,
  HoroscopeScreen:HoroscopeScreen,
  WeatherScreen:WeatherScreen
 
})

const AppContainer = createAppContainer(AppNavigator)


