import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { OtpInput } from 'react-native-otp-entry';
import ButtonFirst from '../../components/ButtonFirst';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconImg = require('../../assets/Icons/one-time-password.png')

export default function Otentikasi( {navigation} ) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Daftar')} style={{height:50, justifyContent:"center", paddingHorizontal:16}}>
            <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.subContainer}>
            <Image source={iconImg} style={styles.sizeIcon} />
            <Text style={styles.headerText}>Kode OTP sudah dikirim!</Text>
        </View>
        <View style={styles.otpContainer}>
            <OtpInput
             numberOfDigits={5}
             onTextChange={(text)=>console.log(text)}
             focusColor={'#7C7CFC'}
             focusStickBlinkingDuration={400}
             theme={{
                pinCodeContainerStyle : {
                    width: 40,
                    height: 40,
                    borderRadius: 10
                }
             }}
            />
        </View>
        <View style={styles.subContainerTwo}>
             <Text style={styles.textOtp}>Masukkan kode OTP yang kami kirimkan ke email HP terdaftar anda (email@gmail.com)</Text>
             <View style={{flexDirection:'row', marginTop:8, marginBottom:26}}>
                <Text>Belum menerima kode OTP ?</Text>
                <TouchableOpacity>
                    <Text style={{color:'#7C7CFC', fontWeight:700, marginLeft:4}}>Kirim Ulang</Text>
                </TouchableOpacity>
             </View>
            <ButtonFirst 
             title='Kirim'
             onPress={()=>{navigation.navigate("Navigate")}}
            />          
        </View>
        <View style={{alignItems:'center', marginTop: 20}}>
            <View style={styles.alertOtp}>
                <MaterialCommunityIcons name="chat-alert" size={42} color="#F24E1E" />
                <View style={{marginLeft:10}}>
                    <Text style={{color:'#E7042C', fontWeight:'900', fontSize:14, textAlign:'center'}}>Jangan kasih kode OTP ke siapapun!</Text>
                    <Text style={{color:'#E7042C', fontWeight:'500', fontSize:14, textAlign:'center'}}>Kode OTP ini bersifat privasi, jadi jangan beri tahu ke siapapun agar informasi akun anda terjaga.</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:30
    },
    subContainer : {
        justifyContent:'center',
        alignItems:'center'
    },
    sizeIcon : {
        marginTop:55,
        width: 80,
        height: 80
    },
    headerText : {
        marginTop:20,
        fontSize:24,    
        fontWeight:'900'
    },
    otpContainer : {
        marginHorizontal: 48,
        marginTop:32,
    },
    subContainerTwo : {
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:16
    },
    textOtp : {
        textAlign:'center'
    },
    alertOtp : {
        width:360,
        height:'auto',
        backgroundColor:'#FDF9FA',
        borderColor: '#E7042C',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:20
    }
})