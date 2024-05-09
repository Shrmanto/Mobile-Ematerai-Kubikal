import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { primaryColor, secondaryColor } from '../../components/Color'
import * as DocumentPicker from 'expo-document-picker';

const logoImg = require("../../assets/Logo.png")
const materaiImg = require("../../assets/e-Materai.png")

export default function Login({ navigation }) {

    const [selectedDoc, setSelectedDoc] = useState(null);

    const handlePickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true
            })

            setSelectedDoc(result.assets[0]);
            
            if (result) {
                console.log(result)
                // navigation.navigate('DetailDoc', {selectedDoc} )
                
            } else {
                console.log('Pemilihan dokumen dibatalkan');
            }

        } catch (err) {
            console.log('Pemilihan dokumen gagal', err)
        }
    }

    return (
        <View style={{flex:1, marginTop:30}}>
            <View style={{paddingHorizontal:16, marginTop:85, alignItems:"center"}}>
                <Image source={logoImg} width={184} height={53}/>
                <Text style={{marginTop:25, marginBottom:55, width:240, textAlign:"center", fontSize:12}}>Tanda tangan dan Materai Elektronik Terintegrasi dalam Satu Aplikasi</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Daftar')} style={{width:320, height:40, marginBottom:12, backgroundColor:primaryColor, alignItems:"center", justifyContent:"center", borderRadius:5}}>
                    <Text style={{fontSize:12, fontWeight:700, color:"#ffff"}}>Daftar Sekarang</Text>
                </TouchableOpacity>
                <View style={{alignItems:"center", flexDirection:"row"}}>
                    <Text style={{fontSize:12, color:"rgba(78, 75, 102, 0.4)", marginRight:5}}>Sudah Punya Akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{fontWeight:700, color:primaryColor}}>Masuk</Text></TouchableOpacity>
                </View>
                <View style={{marginTop:25, width:320, height:200, backgroundColor:secondaryColor, borderRadius:5, alignItems:"center", paddingVertical:15, paddingHorizontal:12}}>
                    <Image source={materaiImg} width={50} height={50}/>
                    <Text style={{fontSize:12, color:"#fff", marginVertical:8}}>Ingin membutuhkan e-materai saja?</Text>
                    <Text style={{fontSize:12, color:"#fff", textAlign:"center"}}>Upload & tempel e-materai dengan mudah dan cepat disini</Text>
                    <TouchableOpacity onPress={handlePickDocument} style={{width:285, height:40, marginBottom:12, backgroundColor:primaryColor, alignItems:"center", justifyContent:"center", borderRadius:5, marginTop:10}}>
                        <Text style={{fontSize:12, fontWeight:600, color:"#ffff"}}>Upload Dokumen</Text>
                    </TouchableOpacity>
                    {selectedDoc && (
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: '#fff' }}>Nama: {selectedDoc.name}</Text>
                            <Text style={{ fontSize: 10, color: '#fff' }}>Ukuran: {selectedDoc.size} bytes</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}