import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function ChangePwd({navigation}) {

    const [isPasswordOldVisible, setIsPasswordOldVisible] = useState(false)
    const [isPasswordNewVisible, setIsPasswordNewVisible] = useState(false)
    const [isPasswordNewConfirmVisible, setIsPasswordNewConfirmVisible] = useState(false)

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{height:50, justifyContent:"center"}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, }}>Ubah Password</Text>
            <View></View>
        </View>
        <View style={{marginTop:20, alignItems:'center', paddingHorizontal:16}}>
            <View>
                <Text style={{marginBottom:8, fontSize:12, fontWeight:600, opacity:0.5}}>Masukkan password saat ini</Text>
                <View style={{borderColor:"#D4D5D9", borderWidth:1, borderRadius:5, flexDirection:'row', width:360, height:40, paddingHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
                    <TextInput placeholder='Ketik disini' secureTextEntry={!isPasswordOldVisible} />
                    <TouchableOpacity onPress={() => setIsPasswordOldVisible(!isPasswordOldVisible)}>
                        <Entypo name={isPasswordOldVisible ? "eye" : "eye-with-line"} size={20} color="black" style={{opacity:0.5}} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{fontSize:16, opacity:0.5, marginVertical:16}}>Masukkan kata sandi baru anda. Gunakan kata sandi dengan minimal 8 karakter, dengan mengkombinasikan huruf kapital, huruf kecil dan angka</Text>
            <View style={{marginBottom:8}}>
                <Text style={{marginBottom:8, fontSize:12, fontWeight:600, opacity:0.5}}>Password Baru</Text>
                <View style={{borderColor:"#D4D5D9", borderWidth:1, borderRadius:5, flexDirection:'row', width:360, height:40, paddingHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
                    <TextInput placeholder='Ketik disini' secureTextEntry={!isPasswordNewVisible} />
                    <TouchableOpacity onPress={() => setIsPasswordNewVisible(!isPasswordNewVisible)}>
                        <Entypo name={isPasswordNewVisible ? "eye" : "eye-with-line"} size={20} color="black" style={{opacity:0.5}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{marginBottom:8, fontSize:12, fontWeight:600, opacity:0.5}}>Konfirmasi Password Baru</Text>
                <View style={{borderColor:"#D4D5D9", borderWidth:1, borderRadius:5, flexDirection:'row', width:360, height:40, paddingHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
                    <TextInput placeholder='Ketik disini' secureTextEntry={!isPasswordNewConfirmVisible} />
                    <TouchableOpacity onPress={() => setIsPasswordNewConfirmVisible(!isPasswordNewConfirmVisible)}>
                        <Entypo name={isPasswordNewConfirmVisible ? "eye" : "eye-with-line"} size={20} color="black" style={{opacity:0.5}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{position:'absolute', bottom:24}}>
            <View style={{alignItems:'center', width:382, maxWidth:400}}>
                <TouchableOpacity style={styles.btnPw}>
                    <Text style={{fontSize:14, color:'#fff', fontWeight:'800'}}>Ubah Password</Text>
                </TouchableOpacity>
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
    header : {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal:16,
        height: 50,
        backgroundColor: '#fff'
    },
    btnPw : {
        width:360,
        height: 50,
        backgroundColor: '#7C7CFC',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginHorizontal:16
    }
})