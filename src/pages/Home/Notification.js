import { View, Text } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:16, marginTop:10}}>Tidak ada Notifikasi</Text>
    </View>
  )
}