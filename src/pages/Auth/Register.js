import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import ButtonFirst from '../../components/ButtonFirst';
import TextInputOne from '../../components/TextInputOne';

export default function Register( {navigation} ) {
    const [isCheckedMomofin, setCheckedMomofin] = useState(false);
    const [isCheckedPeruri, setCheckedPeruri] = useState(false);

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
          <View style={{marginVertical:25, alignItems:'center'}}>
            <View style={{marginBottom:10}}>
                <Text style={{marginBottom:5, fontSize:12}}>Email</Text>
                <TextInputOne />
            </View>
            <View style={{marginBottom:10}}>
                <Text style={{marginBottom:5, fontSize:12}}>Nama Lengkap</Text>
                <TextInputOne />
            </View>
            <View style={{marginBottom:10}}>
                <Text style={{marginBottom:5, fontSize:12}}>Kata Sandi</Text>
                <TextInputOne />
            </View>
            <View>
                <Text style={{marginBottom:5, fontSize:12}}>Konfirmasi Kata Sandi</Text>
                <TextInputOne />
            </View>
            </View>
            <View style={{marginBottom:25, paddingHorizontal:16}}>
                <View style={{flexDirection:"row", alignItems:"center", marginBottom:16}}>
                    <Checkbox style={{marginRight:10}} value={isCheckedMomofin} onValueChange={setCheckedMomofin} color={isCheckedMomofin ? '#4630EB' : undefined}></Checkbox>
                    <Text style={{fontSize:12}}>Saya setuju dengan Syarat dan ketentuan dari MOMOFIN</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Checkbox style={{marginRight:10}} value={isCheckedPeruri} onValueChange={setCheckedPeruri} color={isCheckedPeruri ? '#4630EB' : undefined}></Checkbox>
                    <Text style={{fontSize:12}}>Saya setuju dengan Syarat dan ketentuan dari PERURI</Text>
                </View>
            </View>
            <View style={{alignItems:'center', marginBottom:12}}>
                <ButtonFirst 
                title="Daftar"
                onPress={()=>{navigation.navigate('Otentikasi')}}
                />
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)"}}>Sudah Punya Akun?<Text style={{fontWeight:700, color:"#7C7CFC"}}>Masuk</Text></Text>
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