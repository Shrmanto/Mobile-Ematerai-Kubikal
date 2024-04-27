import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import { StackActions } from '@react-navigation/native'

const logoImg = require("../assets/LogoSplash.png")
const logoPeruri = require("../assets/LogoPeruri.png")

export default function SplashScreen({navigation}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.dispatch(StackActions.replace('Landing'));
        }, 3000);
        
        return () => clearTimeout(timer);
      }, []);

  return (
    <View style={{flex:1, backgroundColor:"#7C7CFC"}}>
        <View style={{flex:1 ,alignItems:"center", justifyContent:"center", marginTop:350}}>
            <Image source={logoImg} width={184} height={53}/>
            <View style={{marginTop:320, alignItems:"center"}}>
                <Text style={{marginBottom:10, fontSize:12, fontWeight:700, color:"white"}}>PRODUK DIGITAL DISEDIAKAN OLEH</Text>
                <Image source={logoPeruri} width={184} height={53}/>
            </View>
        </View>
    </View>
  )
}