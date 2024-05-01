import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FullWindowOverlay } from 'react-native-screens';

const profileImg = require('../../../assets/Images/profileme.png')
const iconShield = require('../../../assets/Icons/shield.png')

export default function Profile({navigation}) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Navigate')} style={{height:50, justifyContent:"center"}}>
                <MaterialCommunityIcons name="backburger" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {/* Profile */}
        <View style={{flexDirection:'row', alignItems:'center', marginTop:18,}}>
            <View style={styles.profile}>
                <Image source={profileImg} style={{borderRadius:100, width:62, height:62}}/>
                <Image source={iconShield} style={styles.iconShield} />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{fontSize:16, fontWeight:'900'}}>datanode.naralogi@gmail.com</Text>
                <View style={styles.labelVerifikasi}>
                    <Text style={{fontSize:10, color:'#fff'}}>Terverifikasi</Text>
                </View>
            </View>
        </View>
        <View style={{marginTop:32, flexDirection:'row', paddingHorizontal:16, justifyContent:'space-between'}}>
            <Text style={{fontSize:14}}>Balance Anda</Text>
            <Text style={{fontSize:12, color:"#5F47F0"}}>History Saldo</Text>
        </View>
        {/* End Profile */}
        <View style={{alignItems:'center', marginTop:10}}>
            <View style={styles.card}>
                <View style={{flexDirection:'row', marginVertical:15, marginHorizontal:20, justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'800', color:'#ECAA4C'}}>0 <Text style={{fontSize:12, fontWeight:'800'}}>EMET</Text></Text>
                    <View style={{width:1, height:42, backgroundColor:"#929292"}}></View>
                    <Text style={{fontSize:20, fontWeight:'800', color:'#36AFBA'}}>0 <Text style={{fontSize:12, fontWeight:'800'}}>ESGN</Text></Text>
                </View>
            </View>
        </View>
        {/* Informasi Pribadi */}
        <View style={{width:FullWindowOverlay, height:'auto', paddingVertical:16, backgroundColor:"#fff", marginTop:32}}>
            <Text style={{fontSize:16, fontWeight:'700', marginLeft:16, color:'#4E4B66'}}>Informasi Pribadi</Text>
            <View style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Plan Anda</Text>
                    <View style={{width:'auto', height:'auto', backgroundColor:'#D0E9FF', justifyContent:'center', alignItems:'center', paddingHorizontal:10, paddingVertical:5, borderRadius:50}}>
                        <Text style={{fontSize:10, color:'#406C93'}}>Basic Account</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('InfoPribadi')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Informasi Pribadi</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePwd')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Ubah Password</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sertifikat')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Sertifikat Digital</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'auto', height:'auto', backgroundColor:'#FFE3E2', justifyContent:'center', alignItems:'center', paddingHorizontal:10, paddingVertical:5, borderRadius:50}}>
                            <Text style={{fontSize:10, color:'#D86666'}}>Belum Aktif</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Hapus Akun</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </View>
        </View>
        {/* Informasi Umum */}
        <View style={{width:FullWindowOverlay, height:'auto', paddingVertical:16, backgroundColor:"#fff", marginTop:12}}>
            <Text style={{fontSize:16, fontWeight:'700', marginLeft:16, color:'#4E4B66'}}>Informasi Umum</Text>
            <View style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Pusat Bantuan</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Syarat dan Ketentuan Layanan</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Kebijakan Privasi</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Landing')} style={{width:FullWindowOverlay, height:'auto', paddingVertical:14, backgroundColor:'#fff', marginTop:12}}>
            <Text style={{marginLeft:16, fontSize:16, fontWeight:'800'}}>Keluar</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:30
    },
    header : {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal:16,
        height: 50,
    },
    profile : {
        width:68, 
        height:68, 
        backgroundColor:"#ffff", 
        borderRadius:100, 
        marginLeft:16,
        justifyContent:"center", 
        alignItems:"center"
    },
    labelVerifikasi :{
        backgroundColor: "#00DC7F",
        width:80,
        height:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:5
    },
    iconShield : {
        width:27, 
        height:27, 
        position:'absolute',
        bottom:0,
        left:40
    },
    card : {
        backgroundColor: "#fff",
        width: 360,
        height:72,
        borderRadius:10,
        elevation:0
    },
    barMenu : {
        width:'auto',
        marginHorizontal:16,
        height:50,
        borderBottomWidth:1,
        justifyContent:'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    }
})