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
import Sertifikat from '../pages/Home/Profile/Submenu/Sertifikat';
import ChangePwd from '../pages/Home/Profile/Submenu/ChangePwd';
import DetailDoc from '../pages/Document/DetailDoc';
import PusatBantuan from '../pages/Home/Profile/Submenu/PusatBantuan';
import PalingSeringDitanyakan from '../pages/Home/Profile/Submenu/PusatBantuan/PalingSeringDitanyakan'
import Registrasi from '../pages/Home/Profile/Submenu/PusatBantuan/Registrasi'
import EKYC from '../pages/Home/Profile/Submenu/PusatBantuan/eKYC'
import BantuanProfile from '../pages/Home/Profile/Submenu/PusatBantuan/BantuanProfile'
import pembubuhan from '../pages/Home/Profile/Submenu/PusatBantuan/Pembubuhan'
import Dokumen from '../pages/Home/Profile/Submenu/PusatBantuan/Dokumen'
import KodeOTP from '../pages/Home/Profile/Submenu/PusatBantuan/KodeOTP'
import CaraTopUp from '../pages/Home/Profile/Submenu/PusatBantuan/CaraTopUp'
import Saldo from '../pages/Home/Profile/Submenu/PusatBantuan/Saldo'
import Produk from '../pages/Home/Profile/Submenu/PusatBantuan/Produk'
import Lainnya from '../pages/Home/Profile/Submenu/PusatBantuan/Lainnya'
import DokumenMulti from '../pages/Home/Profile/Submenu/PusatBantuan/DokumenMulti'



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
        <Stack.Screen name='Bantuan' component={PusatBantuan}/>
        <Stack.Screen name="InfoPribadi" component={InfoPribadi} />
        <Stack.Screen name="Sertifikat" component={Sertifikat} />
        <Stack.Screen name="ChangePwd" component={ChangePwd} />
        <Stack.Screen name="DetailDoc" component={DetailDoc} />
        <Stack.Screen name="PalingSeringDitanyakan" component={PalingSeringDitanyakan} />
        <Stack.Screen name="Registrasi" component={Registrasi} />
        <Stack.Screen name="BantuanProfile" component={BantuanProfile} />
        <Stack.Screen name="Pembubuhan" component={pembubuhan} />
        <Stack.Screen name="Dokumen" component={Dokumen} />
        <Stack.Screen name="CaraTopUp" component={CaraTopUp} />
        <Stack.Screen name="KodeOTP" component={KodeOTP} />
        <Stack.Screen name="Saldo" component={Saldo} />
        <Stack.Screen name="Produk" component={Produk} />
        <Stack.Screen name="Lainnya" component={Lainnya} />
        <Stack.Screen name="DokumenMulti" component={DokumenMulti} />
        <Stack.Screen name="EKYC" component={EKYC} />
        
    </Stack.Navigator>
  )
}