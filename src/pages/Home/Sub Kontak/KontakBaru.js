import { View, Text, TouchableOpacity, TextInput, LayoutAnimation, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Feather, AntDesign, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import Button from '../../../components/Button';

export default function KontakBaru({navigation}) {
    const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{paddingHorizontal:16, alignItems:'center', justifyContent:"space-between", flexDirection:"row", height:50, backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Navigate')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Buat Kontak Baru</Text>
            <Text></Text>
        </View>
        <ScrollView>
            <View style={{paddingHorizontal:16, alignItems:"center", height:800}}>
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
                    <View>
                        <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Nomor Handphone<Text style={{color:"red"}}>*</Text></Text>
                        <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='+62' keyboardType='numeric'></TextInput>
                    </View>
                </View>
            </View>
                <View>
                    <TouchableOpacity onPress={toggleCollapse} style={{height:40, width:360, justifyContent:"center"}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{width:330, borderBottomColor:"#929292", borderBottomWidth:1, fontWeight:700}}>Informasi Tambahan <Text style={{color:"rgba(0,0, 0, 0.5)"}}>(Opsional)</Text></Text>
                            <MaterialIcons name={isCollapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    {!isCollapsed && (
                        <View style={{marginTop:15}}>
                            <View style={{marginBottom:12}}>
                                <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Nomor Identitas (NIK)</Text>
                                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='Masukan (NIK)'></TextInput>
                            </View>
                            <View style={{marginBottom:12}}>
                                <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Perusahaan</Text>
                                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='Masukan Perusahaan'></TextInput>
                            </View>
                            <View style={{marginBottom:12}}>
                                <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Divisi</Text>
                                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='Masukan Divisi'></TextInput>
                            </View>
                            <View style={{marginBottom:12}}>
                                <Text style={{marginBottom:5, fontSize:12, fontWeight:600, opacity:0.5}}>Jabatan</Text>
                                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5}} placeholder='Masukan Jabatan'></TextInput>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, backgroundColor:"#fff", width:'100%', maxWidth:392, height:80, alignItems:"center", justifyContent:"center"}}>
            <Button 
                title='Simpan Kontak'
                style={{borderRadius:5}}
            />
        </View>
    </View>
  )
}