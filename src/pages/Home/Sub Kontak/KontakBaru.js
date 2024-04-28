import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather, AntDesign, EvilIcons } from '@expo/vector-icons';
import Button from '../../../components/Button';

export default function KontakBaru({navigation}) {
  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{paddingHorizontal:16, alignItems:'center', justifyContent:"space-between", flexDirection:"row", height:50, backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Navigate')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Buat Kontak Baru</Text>
            <Text></Text>
        </View>
        <View style={{paddingHorizontal:16, alignItems:"center"}}>
          <View style={{paddingVertical:15}}>
            <View style={{width:360, height:45, backgroundColor:"rgba(218, 218, 250, 0.5)", paddingHorizontal:15, alignItems:"center", borderColor:"#7C7CFC", borderWidth:1, borderRadius:5, flexDirection:"row"}}>
                <EvilIcons name="user" size={24} color="#1F66A6" />
                <Text style={{marginLeft:5, fontSize:12, fontWeight:600, color:"#1F66A6"}}>Ambil dari Kontak Anda</Text>
            </View>
            <View style={{marginVertical:12}}>
                <View style={{marginBottom:12}}>
                    <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Nama Lengkap<Text style={{color:"red"}}>*</Text></Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='Masukan Nama Lengkap'></TextInput>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Email<Text style={{color:"red"}}>*</Text></Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='contoh@gmail.com'></TextInput>
                </View>
                <View style={{marginBottom:12}}>
                    <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Nomor Handphone<Text style={{color:"red"}}>*</Text></Text>
                    <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='+62' keyboardType='numeric'></TextInput>
                </View>
            </View>
          </View>
        </View>
        <View style={{position:"absolute", bottom:0, backgroundColor:"#fff", width:392, height:80, alignItems:"center", justifyContent:"center"}}>
            <Button 
                title='Simpan Kontak'
                style={{borderRadius:5}}
            />
        </View>
    </View>
  )
}