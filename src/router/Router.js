import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from "../pages/SplashScreen"
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Landing from "../pages/Landing"
import Navigation from '../components/Navigation';
import Otentikasi from '../pages/Auth/Otentikasi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Daftar" component={Register} />
        <Stack.Screen name='Otentikasi' component={Otentikasi} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navigate" component={Navigation} />
    </Stack.Navigator>
  )
}