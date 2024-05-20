import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Animated, Modal, TouchableWithoutFeedback, Button } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { FullWindowOverlay } from 'react-native-screens';
import { primaryColor } from '../../../../components/Color';



const profileImg = require('../../../../assets/Images/profileme.png')
const iconShield = require('../../../../assets/Icons/shield.png')
const iconPanduan = require("../../../../assets/Icons/Panduan.png")


export default function PusatBantuan({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;




  return (
    <ScrollView style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Navigate')} style={{ height: 50, justifyContent: "center" }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight:"bold"}}>Pusat Bantuan</Text>
                    <View></View>
                </View>

        <View style={{ alignItems:"center", marginTop:10}}>
            <Text style={{fontSize:16, fontWeight:'bold', marginBottom:10, marginRight:140}}>Halo, Apa yang bisa kami bantu?</Text>
            <View style={{width:360, height:95, alignItems:"center", backgroundColor:"#004DA3", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row" }}>
                  <Image source={iconPanduan} width={55} height={55} style={{marginRight:20}}/>
                  <View style={{flexDirection:"column", width:250}}>
                    <Text style={{fontSize:16, fontWeight:800, color:"#fff", marginBottom:5}}>Panduan Awal</Text>
                    <Text style={{fontSize:12, fontWeight:700, color:"#fff"}}>Pelajari cara pembubuhan meterai & tanda tangan dengan Kubikal</Text>
                  </View>
            </View>
        </View>

        {/* Informasi Pribadi */}
        <View style={{width:FullWindowOverlay, height:'auto', paddingVertical:16, backgroundColor:"#fff", marginTop:32}}>
            <TouchableOpacity onPress={()=> navigation.navigate('PalingSeringDitanyakan')} style={styles.barMenu}>
            <View >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Paling Sering Ditanyakan</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Registrasi')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Registrasi</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EKYC')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>eKYC</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BantuanProfile')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Profile</Text>
                    <View style={{flexDirection:'row'}}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DokumenMulti')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Documen Multi Pihak</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('KodeOTP')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Kode OTP</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dokumen')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Dokumen</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CaraTopUp')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Cara Top Up</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Saldo')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Saldo</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Produk')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Produk</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lainnya')} style={styles.barMenu}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#4E4B66'}}>Lainnya</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#929292" />
                </View>
            </TouchableOpacity>

            

        </View>
        {/* Informasi Umum */}
        <View style={{width:FullWindowOverlay, alignItems:'center', height:'700', paddingVertical:16, backgroundColor:"#fff", marginTop:12}}>
            <View style={{width:370, height:67, backgroundColor:"#0DA300", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row" }}>
                  <FontAwesome name="whatsapp"  size={37} color="#fff" style={{marginLeft:50}} />
                  <View style={{alignItems:'center',flexDirection:"column", width:250}}>
                    <Text style={{fontSize:13, fontWeight:700, color:"#fff", paddingTop:10, paddingRight:46}}>Chat dengan Customer Support</Text>
                  </View>
            </View>
            
          
           
        </View>
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
        backgroundColor: '#fff'
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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent:'center'
    },
    modalContent: {
        backgroundColor: "#fff",
        width:'100%',
        maxWidth:280,
        height:'auto',
        borderRadius:15,
        paddingVertical:16
    },
})