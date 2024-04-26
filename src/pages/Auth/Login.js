import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{marginTop:30, paddingHorizontal:16}}>
            <View style={{alignItems:"center"}}>
                <Text style={{marginBottom:12, fontSize:14, fontWeight:700}}>Masuk ke Akun Anda</Text>
                <Text style={{textAlign:"center", fontSize:12, color:"#4E4B66"}}>Selamat datang untuk anda yang sudah terdaftar, silahkan masukkan data akun anda.</Text>
            </View>
            <View style={{marginVertical:15}}>
                <Text style={{marginBottom:5, fontSize:12}}>Email</Text>
                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
                <Text style={{marginVertical:5, fontSize:12}}>Kata Sandi</Text>
                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
            </View>
            <View style={{marginLeft:"auto", marginBottom:30}}>
                <Text style={{fontSize:12, fontWeight:700, color:"#7C7CFC"}}>Lupa Kata Sandi?</Text>
            </View>
            <View style={{width:360, height:40, marginBottom:12, backgroundColor:"#7C7CFC", alignItems:"center", justifyContent:"center", borderRadius:20}}>
                <Text style={{fontSize:12, fontWeight:700, color:"#ffff"}}>Masuk</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)"}}>Belum Punya Akun?<Text style={{fontWeight:700, color:"#7C7CFC"}}>Daftar</Text></Text>
            </View>
        </View>
    </View>
  )
}