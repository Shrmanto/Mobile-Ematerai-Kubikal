import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from "../pages/SplashScreen"
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Landing from "../pages/Home/Landing"
import Navigation from '../components/Navigation';
import Otentikasi from '../pages/Auth/Otentikasi';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Topup from '../pages/Home/Topup/Topup';
import Profile from '../pages/Home/Profile/Profile';
import KontakBaru from '../pages/Home/Sub Kontak/KontakBaru';
import InfoPribadi from '../pages/Home/Profile/Submenu/InfoPribadi';
import Sertifikat from '../pages/Home/Sertifikat/Sertifikat';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Daftar" component={Register} />
        <Stack.Screen name='Otentikasi' component={Otentikasi} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Topup" component={Topup} />
        <Stack.Screen name="Navigate" component={Navigation} />
        <Stack.Screen name="KontakBaru" component={KontakBaru} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="InfoPribadi" component={InfoPribadi} />
        <Stack.Screen name="Sertifikat" component={Sertifikat} />
    </Stack.Navigator>
  )
}