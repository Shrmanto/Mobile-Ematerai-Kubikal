import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import ButtonFirst from '../../../../components/ButtonFirst';

const SertifImg = require("../../../../assets/Images/sertifikat.png")

export default function Sertifikat({navigation}) {
  return (
    <View style={{flex:1, marginTop:30}}>
        <View style={{paddingHorizontal:16, alignItems:'center', justifyContent:"space-between", flexDirection:"row", height:50, backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Navigate')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Sertifikat</Text>
            <Text></Text>
        </View>
        <View>
            <Image source={SertifImg} style={{width:"auto", maxWidth:"100%"}}/>
            <View style={{marginTop:25, marginBottom:40, alignItems:"center", marginHorizontal:16}}>
                <Text style={{fontSize:12, fontWeight:800}}>Lakukan Verifikasi KYC dan Terbitkan Sertifikasi Elektronik Anda</Text>
                <Text style={{fontSize:12, fontWeight:800, textAlign:"center", marginVertical:12}}>Benefit yang akan Anda dapat jika melakukan verifikasi KYC</Text>
                <View style={{marginLeft:10}}>
                    <View style={{flexDirection:"row", alignItems:"center", width:300}}>
                        <View style={{width:20, height:20, backgroundColor:"#95C9BC", justifyContent:"center", alignItems:"center", borderRadius:100}}>
                            <FontAwesome5 name="check" size={12} color="#11654E" />
                        </View>
                        <Text style={{fontSize:12, fontWeight:700, marginLeft:8, opacity:0.5}}>Tanda tangan elektronik (TTE) bersertifikat sesuai UU ITE 2008 pasal 11</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", width:300, marginVertical:30}}>
                        <View style={{width:20, height:20, backgroundColor:"#95C9BC", justifyContent:"center", alignItems:"center", borderRadius:100}}>
                            <FontAwesome5 name="check" size={12} color="#11654E" />
                        </View>
                        <Text style={{fontSize:12, fontWeight:700, marginLeft:8, opacity:0.5}}>Aman dan terpercaya</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", width:300}}>
                        <View style={{width:20, height:20, backgroundColor:"#95C9BC", justifyContent:"center", alignItems:"center", borderRadius:100}}>
                            <FontAwesome5 name="check" size={12} color="#11654E" />
                        </View>
                        <Text style={{fontSize:12, fontWeight:700, marginLeft:8, opacity:0.5}}>Diakui oleh swasta, pemerintah, dan sistem penelitian nasional</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <ButtonFirst title='KYC Sekarang' style={{borderRadius:5}}/>
            </View>
        </View>
    </View>
  )
}