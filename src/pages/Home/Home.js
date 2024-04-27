import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView>
      <View style={{marginTop:30, height:1000}}>
          <LinearGradient style={{width:"auto", height:185, backgroundColor:"#7C7CFC", justifyContent:"center"}} colors={['#7C7CFC', '#4A4A96']}>
            <View style={{marginHorizontal:16, flexDirection:"row"}}>
              <View style={{width:42, height:42, backgroundColor:"#ffff", borderRadius:100, marginRight:22, justifyContent:"center", alignItems:"center"}}>
                <AntDesign name="user" size={24} color="black" />
              </View>
              <View>
                <Text style={{fontSize:16, color:"white"}}>Hallo,</Text>
                <Text style={{fontSize:16, color:"white", fontWeight:800}}>Guest</Text>
              </View>
            </View>
            <View style={{marginHorizontal:16, marginVertical:8}}>
              <View style={{width:360, height:60, backgroundColor:"rgba(255, 255, 255, 0.5)", borderRadius:15, paddingHorizontal:11, justifyContent:"center"}}>
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <View>
                    <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingBottom:4}}>Sertifikat Digital</Text>
                    <View style={{width:77, height:23, backgroundColor:"#FFE3E2", paddingVertical:4, paddingHorizontal:10, borderRadius:10}}>
                      <Text style={{fontSize:10, fontWeight:800, color:"#D86666"}}>Belum Aktif</Text>
                    </View>
                  </View>
                  <View style={{width:3, height:40, backgroundColor:"#000000"}}></View>
                  <View style={{width:138, height:33, backgroundColor:"#7C7CFC", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                    <Text style={{fontSize:12, fontWeight:500, color:"#fff"}}>KYC Sekarang</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={{marginHorizontal:16, marginTop:-25}}>
            <LinearGradient style={{width:360, height:115, backgroundColor:"#004DA3", borderRadius:15, paddingHorizontal:20, paddingVertical:15}} colors={['#001D3D', '#004DA3']}>
              <Text style={{fontSize:12, fontWeight:800, color:"#fff"}}>Balance Anda</Text>
              <View style={{marginTop:21, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style={{fontSize:16, fontWeight:800, color:"#E6B25A"}}>0<Text style={{fontSize:10}}>EMET</Text></Text>
                <Text style={{fontSize:16, fontWeight:800, color:"#7C7CFC"}}>0<Text style={{fontSize:10}}>ESGN</Text></Text>
                <View style={{width:114, height:42, backgroundColor:"#7C7CFC", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                  <Text style={{fontSize:12, fontWeight:800, color:"#fff"}}>+ TOP UP</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={{marginHorizontal:16, marginTop:25}}>
            <View style={{flexDirection:"row"}}>
              <LinearGradient style={{width:171, height:90, backgroundColor:"#004DA3", borderRadius:15, paddingHorizontal:20, paddingVertical:15}} colors={['#001D3D', '#004DA3']}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Feather name="send" size={24} color="#fff" />
                  <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:15, paddingLeft:5}}>0</Text>
                </View>
                <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:10}}>Dalam Proses</Text>
              </LinearGradient>
              <LinearGradient style={{width:171, height:90, backgroundColor:"#004DA3", borderRadius:15, paddingHorizontal:20, marginLeft:18, paddingVertical:15}} colors={['#001D3D', '#004DA3']}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />
                  <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:15, paddingLeft:5}}>0</Text>
                </View>
                <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:10}}>Dokumen Sukses</Text>
              </LinearGradient>
            </View>
          </View>
          <View style={{marginBottom:25, marginTop:50, marginHorizontal:16}}>
            <Text style={{fontSize:16, fontWeight:800, marginBottom:10}}>Quick Action</Text>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"rgba(0, 0, 0, 0.2)", borderBottomWidth:1, marginBottom:10}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <MaterialCommunityIcons name="folder-upload" size={24} color="rgba(0, 0, 0, 0.6)" />
                </View>
                <Text style={{fontSize:14, fontWeight:800}}>Unggah & Tanda Tangan Dokumen</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="rgba(0, 0, 0, 0.4)" />
                </View>
              </View>
            </View>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"rgba(0, 0, 0, 0.2)", borderBottomWidth:1, marginBottom:10}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <MaterialCommunityIcons name="postage-stamp" size={24} color="rgba(0, 0, 0, 0.6)" />
                </View>
                <Text style={{fontSize:14, fontWeight:800}}>Bubuhkan e-Materai</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="rgba(0, 0, 0, 0.4)" />
                </View>
              </View>
            </View>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"rgba(0, 0, 0, 0.2)", borderBottomWidth:1, marginBottom:10}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <MaterialCommunityIcons name="message-question" size={24} color="rgba(0, 0, 0, 0.6)" />
                </View>
                <Text style={{fontSize:14, fontWeight:800}}>Frequently Asked Question</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="rgba(0, 0, 0, 0.4)" />
                </View>
              </View>
            </View>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"rgba(0, 0, 0, 0.2)", borderBottomWidth:1}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <AntDesign name="customerservice" size={24} color="rgba(0, 0, 0, 0.6)" />
                </View>
                <Text style={{fontSize:14, fontWeight:800}}>Hubungi Customer Service</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="rgba(0, 0, 0, 0.4)" />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal:16}}>
            <LinearGradient style={{width:360, height:250, backgroundColor:"#004DA3", borderRadius:15, paddingHorizontal:23, paddingVertical:19}} colors={['#001D3D', '#004DA3']}>
              <Text style={{fontSize:16, fontWeight:800, color:"#fff", marginBottom:25}}>Riwayat</Text>
              <View style={{alignItems:"center"}}>
                <View style={{marginBottom:22}}>
                  <MaterialCommunityIcons name="file-document-multiple-outline" size={100} color="white" />
                </View>
                <Text style={{fontSize:12, color:"#fff"}}>Belum ada Dokumen</Text>
              </View>
            </LinearGradient>
          </View>
      </View>
    </ScrollView>
  )
}