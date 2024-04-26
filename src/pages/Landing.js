import { View, Text, Image } from 'react-native'
import React from 'react'

const logoImg = require("../assets/Logo.png")
const materaiImg = require("../assets/e-Materai.png")

export default function Login() {
  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{paddingHorizontal:16, marginTop:85, alignItems:"center"}}>
            <Image source={logoImg} width={184} height={53}/>
            <Text style={{marginTop:25, marginBottom:55, width:240, textAlign:"center", fontSize:12}}>Tanda tangan dan Materai Elektronik Terintegrasi dalam Satu Aplikasi</Text>
            <View style={{width:320, height:40, marginBottom:12, backgroundColor:"#7C7CFC", alignItems:"center", justifyContent:"center", borderRadius:5}}>
                <Text style={{fontSize:12, fontWeight:700, color:"#ffff"}}>Daftar Sekarang</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)"}}>Sudah Punya Akun?<Text style={{fontWeight:700, color:"#7C7CFC"}}>Masuk</Text></Text>
            </View>
            <View style={{marginTop:25, width:320, height:200, backgroundColor:"#004DA3", borderRadius:5, alignItems:"center", paddingVertical:15, paddingHorizontal:12}}>
                <Image source={materaiImg} width={50} height={50}/>
                <Text style={{fontSize:12, color:"#fff", marginVertical:8}}>Ingin membutuhkan e-materai saja?</Text>
                <Text style={{fontSize:12, color:"#fff", textAlign:"center"}}>Upload & tempel e-materai dengan mudah dan cepat disini</Text>
                <View style={{width:285, height:40, marginBottom:12, backgroundColor:"#7C7CFC", alignItems:"center", justifyContent:"center", borderRadius:5, marginTop:10}}>
                    <Text style={{fontSize:12, fontWeight:600, color:"#ffff"}}>Upload Dokumen</Text>
                </View>
            </View>
        </View>
    </View>
  )
}