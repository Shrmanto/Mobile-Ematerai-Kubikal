import { View, Text, Image } from 'react-native'
import React from 'react'

const IconContact = require("../../assets/Icons/contacts.png")
// const IconContact = require("../../assets/Icons/notification.png")

export default function Kontak() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={IconContact} style={{width:100, height:100}}/>
      <Text style={{fontSize:16, marginTop:10}}>Belum ada Kontak</Text>
      <Text style={{fontSize:14, marginTop:10}}>Tambah Kontak untuk menambahkan penandatangan</Text>
    </View>
  )
}