import { Platform,View, StyleSheet, Text, ScrollView, Image, TouchableOpacity,Modal, Animated, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { primaryColor, secondaryColor, textInputColor, shortButtonColor, whiteColor } from '../../components/Color/index'
import { FullWindowOverlay } from 'react-native-screens';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

const iconKendala = require("../../assets/Icons/Kendala.png")
const iconPanduan = require("../../assets/Icons/bx_qr.png")
const patternTop = require("../../assets/pattern-top.png")
const patternBottom = require("../../assets/pattern-bottom.png")

export default function Home( {navigation} ) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(0));

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      AsyncStorage.setItem("document", JSON.stringify(result.assets[0]));
      navigation.navigate("DetailDoc");
    } catch (err) {
      console.log("Pemilihan dokumen gagal", err);
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
      Animated.timing(slideAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
      }).start(() => setIsModalVisible(false));
  }

  useEffect(() => {
      if (isModalVisible) {
          Animated.timing(slideAnim, {
              toValue: 1,
              duration: 100,
              useNativeDriver: true,
          }).start();
      } else {
          slideAnim.setValue(0);
      }
  }, [isModalVisible]);

  return (
    <ScrollView>
      <View style={{marginTop:30, height:1500}}>
          <View style={{width:"auto", height:200, backgroundColor:"#222222", justifyContent:"center", borderBottomEndRadius:15, borderBottomStartRadius:15 }} colors={['#7C7CFC', '#4A4A96']}>
            <Image source={patternTop} style={{position:'absolute', top:0}} />
            <Image source={patternBottom} style={{position:'absolute', right:0, resizeMode:'contain'}} />
            <View style={{marginHorizontal:16, flexDirection:"row"}}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{width:42, height:42, backgroundColor:"#ffff", borderRadius:100, marginRight:22, justifyContent:"center", alignItems:"center"}}>
                <AntDesign name="user" size={24} color="black" />
              </TouchableOpacity>
              <View>
                <Text style={{fontSize:16, color:"white"}}>Hallo,</Text>
                <Text style={{fontSize:16, color:"white", fontWeight:800}}>Guest</Text>
              </View>
            </View>
            <View style={{alignItems:"center"}}>
              <View style={{marginHorizontal:16, marginVertical:8}}>
                <View style={{width:360, height:60, backgroundColor:"#FFEF2680", borderRadius:15, paddingHorizontal:11, justifyContent:"center"}}>
                  <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <View>
                      <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingBottom:4}}>Sertifikat Digital</Text>
                      <View style={{width:77, height:23, backgroundColor:"#222222", paddingVertical:4, paddingHorizontal:10, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:10, fontWeight:800, color:"#D86666"}}>Belum Aktif</Text>
                      </View>
                    </View>
                    <View style={{width:2, height:40, backgroundColor:"#000000"}}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('Sertifikat')} style={{width:138, height:33, backgroundColor:"#222222", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                      <Text style={{fontSize:12, fontWeight:500, color:"#fff"}}>KYC Sekarang</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{alignItems:"center"}}>
            <View style={{marginHorizontal:16, marginTop:-30}}>
              <LinearGradient style={{width:360, height:115, backgroundColor:"#051D0A", borderRadius:15, paddingHorizontal:20, paddingVertical:15}} colors={['#82312D', '#051D0A']}>
                <Text style={{fontSize:12, fontWeight:800, color:"#fff"}}>Balance Anda</Text>
                  <View style={{marginTop:21, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{fontSize:16, fontWeight:800, color:"#E6B25A"}}>0<Text style={{fontSize:10}}> EMET</Text></Text>
                    <Text style={{fontSize:16, fontWeight:800, color: shortButtonColor}}>0<Text style={{fontSize:10}}> ESGN</Text></Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Topup')} style={{width:114, height:42, backgroundColor:"#FFA000", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                        <Text style={{fontSize:12, fontWeight:800, color:"#fff"}}>+ TOP UP</Text>
                      </TouchableOpacity>
                  </View>
              </LinearGradient>
            </View>
            <View style={{marginHorizontal:16, marginTop:25}}>
              <View style={{flexDirection:"row"}}>
                <View style={{width:171, height:90, backgroundColor:"#39206E", borderRadius:15, paddingHorizontal:20, paddingVertical:15}} colors={['#001D3D', '#004DA3']}>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Feather name="send" size={24} color="#fff" />
                    <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:15, paddingLeft:5}}>0</Text>
                  </View>
                  <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:10}}>Dalam Proses</Text>
                </View>
                <View style={{width:171, height:90, backgroundColor:"#776E00", borderRadius:15, paddingHorizontal:20, marginLeft:18, paddingVertical:15}} colors={['#001D3D', '#004DA3']}>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />
                    <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:15, paddingLeft:5}}>0</Text>
                  </View>
                  <Text style={{fontSize:12, fontWeight:800, color:"#fff", paddingTop:10}}>Dokumen Sukses</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{marginBottom:25, marginTop:25, backgroundColor:"#222222"}}>
            <Text style={{fontSize:16, fontWeight:800, marginBottom:10, color:"#fff", paddingStart:10, paddingTop:10}}>Quick Action</Text>
            <TouchableOpacity onPress={openModal}>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"#fff", borderBottomWidth:1, marginBottom:10, paddingStart:10,borderBottomLeftRadius:15, borderBottomRightRadius:15}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <View style={{marginRight:10}}>
                <MaterialCommunityIcons name="folder-upload" size={24} color="#FFA000" />
              </View>
              <Text style={{fontSize:14, fontWeight:800, color:"#fff"}}>Unggah & Tanda Tangan Dokumen</Text>
              <View style={{marginLeft:"auto"}}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="#FFA000" />
              </View>
            </View>
          </View>            
            </TouchableOpacity>
            <Modal transparent={true} visible={isModalVisible}>
          <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.modalOverlay}>
                  <Animated.View style={[styles.modalContent, {
                      transform: [
                          {
                              translateY: slideAnim.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [300, 0],
                              }),
                          },
                      ],
                  }]}>
                      <View style={{paddingHorizontal:20, paddingVertical:20}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                          <Text style={{fontSize:16, fontWeight:'800'}}>Unggah Dokumen Anda</Text>
                          <Feather name="x" size={24} color="black" style={{marginLeft:26}} onPress={closeModal} />
                        </View>
                          <View style={{width:'auto', height:15, borderBottomWidth:1, justifyContent:'center', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}></View>
                          <TouchableOpacity onPress={handlePickDocument} style={styles.barMenu}>
                              <View style={{flexDirection:'row', alignItems:'center'}}>
                                <MaterialCommunityIcons name="folder-open-outline" size={24} color="lightblue" />
                                  <Text style={{fontSize:16, marginLeft:10}}>Unggah dari File</Text>
                              </View>
                          </TouchableOpacity>
                          <View style={styles.barMenu}>
                              <View style={{flexDirection:'row', alignItems:'center'}}>
                                <MaterialCommunityIcons name="line-scan" size={24} color="lightblue" />
                                  <Text style={{fontSize:16, marginLeft:10}}>Scan dengan Kamera</Text>
                              </View>
                          </View>
                          <View style={styles.barMenu}>
                              <View style={{flexDirection:'row', alignItems:'center'}}>
                                  <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="lightblue" />
                                  <Text style={{fontSize:16, marginLeft:10}}>Template Dokumen</Text>
                                  <MaterialCommunityIcons name="lock-outline" size={24} color="black" style={{marginLeft:"auto"}}/>
                              </View>
                          </View>
                          <View style={{width:"auto", height:72, backgroundColor:"#F3F7FA", marginTop:18, justifyContent:"center", paddingHorizontal:16, borderRadius:10}}>
                              <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                                  <Text style={{fontSize:16, marginLeft:10}}>Balance Anda</Text>
                                  <View style={{flexDirection:"row"}}>
                                    <Text style={{fontSize:20, fontWeight:'800', color:'#000'}}>0 <Text style={{fontSize:12, fontWeight:'800', color:'#ECAA4C'}}>EMET</Text></Text>
                                    <Text style={{fontSize:20, fontWeight:'800', color:'#000', marginLeft:16}}>0 <Text style={{fontSize:12, fontWeight:'800', color:'#36AFBA'}}>ESGN</Text></Text>
                                  </View>
                              </View>
                          </View>
                      </View>
                  </Animated.View>
              </View>
          </TouchableWithoutFeedback>
      </Modal>


            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"#fff", borderBottomWidth:1, marginBottom:10, paddingStart:10, borderBottomLeftRadius:15, borderBottomRightRadius:15}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <MaterialCommunityIcons name="postage-stamp" size={24} color="#FFA000" />
                </View>
                <Text style={{fontSize:14, fontWeight:800, color:"#fff"}}>Bubuhkan e-Materai</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="#FFA000" />
                </View>
              </View>
            </View>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"#fff", borderBottomWidth:1, marginBottom:10, paddingStart:10, borderBottomLeftRadius:15, borderBottomRightRadius:15}}>
              <TouchableOpacity onPress={()=> navigation.navigate('Bantuan')}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <MaterialCommunityIcons name="message-question" size={24} color="#FFA000" />
                </View>
                <Text style={{fontSize:14, fontWeight:800, color:"#fff"}}>Frequently Asked Question</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="#FFA000" />
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{width:"auto", height:50, justifyContent:"center", borderBottomColor:"#fff", borderBottomWidth:1, marginBottom:10, paddingStart:10, borderBottomLeftRadius:15, borderBottomRightRadius:15}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:10}}>
                  <FontAwesome name="whatsapp" size={24} color="#FFA000" />
                </View>
                <Text style={{fontSize:14, fontWeight:800, color:"#fff"}}>Hubungi Customer Service</Text>
                <View style={{marginLeft:"auto"}}>
                  <MaterialIcons name="arrow-forward-ios" size={24} color="#FFA000" />
                </View>
              </View>
            </View>
          </View>
          <View style={{alignItems:"center"}}>
            <View style={{marginHorizontal:16}}>
              <LinearGradient style={{width:360, height:250, backgroundColor:"#242424", borderRadius:15, paddingHorizontal:23, paddingVertical:19}} colors={['#82312D', '#242424']}>
                <Text style={{fontSize:16, fontWeight:800, color:"#fff", marginBottom:25}}>Riwayat</Text>
                <View style={{alignItems:"center"}}>
                  <View style={{marginBottom:22}}>
                    <MaterialCommunityIcons name="file-document-multiple-outline" size={100} color="white" />
                  </View>
                  <Text style={{fontSize:12, color:"#fff"}}>Belum ada Dokumen</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={{marginHorizontal:16}}>
              <Text style={{fontSize:16, fontWeight:800, marginVertical:18, marginTop:25}}>Pelajari Kubikal Lebih Lanjut</Text>
              <View>
                <View style={{width:360, height:95, alignItems:"center", backgroundColor:"#222222", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row" }}>
                  <Image source={iconPanduan} width={55} height={55} style={{marginRight:20}}/>
                  <View style={{flexDirection:"column", width:250}}>
                    <Text style={{fontSize:16, fontWeight:800, color:"#fff", marginBottom:5}}>Panduan Awal</Text>
                    <Text style={{fontSize:12, fontWeight:700, color:"#fff"}}>Pelajari cara pembubuhan meterai & tanda tangan dengan Kubikal</Text>
                  </View>
                </View>
                <View style={{width:360, height:95, alignItems:"center", backgroundColor:"#1CC8EE", borderRadius:15, marginTop:25, paddingHorizontal:24, paddingVertical:16, flexDirection:"row" }}>
                  <Image source={iconKendala} width={55} height={55} style={{marginRight:20}}/>
                  <View style={{flexDirection:"column", width:250}}>
                    <Text style={{fontSize:16, fontWeight:800, color:"#fff", marginBottom:5}}>Anda memiliki kendala?</Text>
                    <Text style={{fontSize:12, fontWeight:700, color:"#fff"}}>Hubungi Kami</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      alignItems: "center"
  },
  modalContent: {
      backgroundColor: "#fff",
      width:'100%',
      maxWidth:390,
      position:'absolute',
      bottom:0,
      borderTopRightRadius:15,
      borderTopLeftRadius: 15
  },
  barMenu : {
      width:'auto',
      height:60,
      borderBottomWidth:1,
      justifyContent:'center',
      borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  barMenuBottom : {
      width:'auto',
      height:60,
      justifyContent:'center',
  }
})