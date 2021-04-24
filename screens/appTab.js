import * as React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from '../screens/SigningIn';
import Exchange from '../screens/ExchangeScreen';
import Home from '../screens/HomeScreen'
import {Image} from 'react-native';

export const appTab = createSwitchNavigator({
    Home:{screen:Home,
        navigationOptions:{
            tabBarIcon : <Image source={require('../assets/Home.png')} style={{width:30,height:30}}/>,
            tabBarLabel:'Requests'
        },
    },
    Exchange:{screen:WelcomeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/exchange.png')} style={{width:30,height:30}}/>,
            tabBarLabel:'Exchange'
        },
       
    }
})