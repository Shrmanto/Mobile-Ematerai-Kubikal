import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ButtonFirst from '../../components/ButtonFirst';

export default function ForgetPassword({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{height:50, justifyContent:"center"}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, }}>Lupa Kata Sandi</Text>
            <Text></Text>
        </View>
        <Text style={styles.title}>Masukkan alamat email terdaftar Anda untuk menerima tautan untuk mengubah kata sandi Anda</Text>
        <View style={{alignItems:"center"}}>
            <View style={{marginVertical:15, paddingHorizontal:16}}>
                <Text style={{marginBottom:5, fontSize:12}}>Email</Text>
                <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor:"rgba(218, 218, 250, 0.1)", borderColor:"#7C7CFC", borderWidth:1, borderRadius:20}}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <ButtonFirst 
                 title="Kirim"
                 onPress={()=>{}}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 30
    },
    header : {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal:16
    },
    title : {
        paddingHorizontal: 16,
        textAlign: 'center',
        marginTop:44,
        alignItems:'center'
    }
})