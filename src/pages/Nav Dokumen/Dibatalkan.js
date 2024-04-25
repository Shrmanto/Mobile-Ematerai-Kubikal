import { View, Text, Image } from 'react-native'
import React from 'react'
const logoImg = require("../../assets/Icons/empty-folder.png")

export default function Dibatalkan() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={logoImg} style={{width:100, height:100}} />
        <Text style={{fontSize:16, marginTop:10}}>Tidak ada dokumen</Text>
        <Text style={{fontSize:14, marginTop:10}}>Tarik layar untuk refresh atau kembali ke</Text>
    </View>
  )
}