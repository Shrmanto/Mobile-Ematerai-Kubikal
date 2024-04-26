import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';

export default function Login( {navigation}) {
    const [isChecked, setChecked] = useState(false);

  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{paddingHorizontal:16}}>
          <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={{height:50, justifyContent:"center"}}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={{marginTop:30, alignItems:"center"}}>
            <Text style={{marginBottom:12, fontSize:14, fontWeight:700}}>Pendaftaran Akun</Text>
            <Text style={{textAlign:"center", fontSize:12, color:"#4E4B66"}}>Silahkan masukkan data anda sesuai dengan detail dibawah ini untuk melanjutkan</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <View style={{marginVertical:25}}>
                <View style={{marginBottom:10}}>
                    <Text style={{marginBottom:5, fontSize:12}}>Email</Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
                </View>
                <View style={{marginBottom:10}}>
                    <Text style={{marginBottom:5, fontSize:12}}>Nama Lengkap</Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
                </View>
                <View style={{marginBottom:10}}>
                    <Text style={{marginBottom:5, fontSize:12}}>Kata Sandi</Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
                </View>
                <View>
                    <Text style={{marginBottom:5, fontSize:12}}>Konfirmasi Kata Sandi</Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
                </View>
                </View>
                <View style={{marginBottom:25}}>
                    <View style={{flexDirection:"row", alignItems:"center", marginBottom:16}}>
                        <Checkbox style={{marginRight:10}} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text style={{fontSize:12}}>Saya setuju dengan Syarat dan ketentuan dari MOMOFIN</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Checkbox style={{marginRight:10}} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}></Checkbox>
                        <Text style={{fontSize:12}}>Saya setuju dengan Syarat dan ketentuan dari MOMOFIN</Text>
                    </View>
                </View>
                <View style={{width:360, height:40, marginBottom:12, backgroundColor:"#7C7CFC", alignItems:"center", justifyContent:"center", borderRadius:20}}>
                    <Text style={{fontSize:12, fontWeight:700, color:"#ffff"}}>Daftar</Text>
                </View>
                <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
                    <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)", marginRight:5}}>Sudah Punya Akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{fontWeight:700, color:"#7C7CFC"}}>Masuk</Text></TouchableOpacity>
                </View>
          </View>
            <View style={{marginTop:20, marginLeft:"auto"}}>
                <View style={{width:105, height:30, backgroundColor:"#12B76A", justifyContent:"center", alignItems:"center", borderRadius:20, flexDirection:"row"}}>
                    <AntDesign name="customerservice" size={15} color="white" />
                    <Text style={{fontSize:12, color:"#fff", fontWeight:700, marginLeft:5}}>Bantuan</Text>
                </View>
            </View>
        </View>
    </View>
  )
}