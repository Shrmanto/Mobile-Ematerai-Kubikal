import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInputOne from '../../components/TextInputOne'
import ButtonFirst from '../../components/ButtonFirst'
import { primaryColor } from '../../components/Color'

export default function Login( {navigation} ) {
  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{marginTop:30, paddingHorizontal:16}}>
            <View style={{alignItems:"center"}}>
                <Text style={{marginBottom:12, fontSize:14, fontWeight:700}}>Masuk ke Akun Anda</Text>
                <Text style={{textAlign:"center", fontSize:12, color:"#4E4B66"}}>Selamat datang untuk anda yang sudah terdaftar, silahkan masukkan data akun anda.</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={{marginVertical:15}}>
                    <Text style={{marginBottom:5, fontSize:12}}>Email</Text>
                    <TextInputOne />
                    <Text style={{marginVertical:5, fontSize:12}}>Kata Sandi</Text>
                    <TextInputOne />
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{marginLeft:"auto", marginBottom:20}}>
                <Text style={{fontSize:12, fontWeight:700, color: primaryColor}}>Lupa Kata Sandi?</Text>
            </TouchableOpacity>
            <View style={{alignItems:"center"}}>
                <ButtonFirst
                 title="Masuk"
                 onPress={()=>{navigation.navigate('Navigate')}}
                />
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:10}}>
                <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)", marginRight:5}}>Belum Punya Akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Daftar')}><Text style={{fontWeight:700, color:primaryColor}}>Daftar</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}