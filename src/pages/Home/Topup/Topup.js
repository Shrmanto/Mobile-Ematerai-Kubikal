import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Esgn, Emet, Bundling } from '../Topup/Tab Topbar'
import ButtonFirst from '../../../components/ButtonFirst'

const TopTabs = createMaterialTopTabNavigator();

export default function Topup({navigation}) {

        const [isModalVisible, setIsModalVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(0));

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
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Navigate')} style={{height:50, justifyContent:"center"}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:16, }}>Top Up</Text>
            <Text></Text>
        </View>
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize:14 },
                tabBarStyle: {marginTop:6}
            }}
        >
            <TopTabs.Screen name='Emet'>
                {() => <Emet onPressBuy={openModal} />}
            </TopTabs.Screen>
            <TopTabs.Screen name='Esgn' component={Esgn} />
            <TopTabs.Screen name='Bundling' component={Bundling} />
        </TopTabs.Navigator>
        
        {/* Modal */}
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
                        <View style={{marginHorizontal:20, marginVertical:20}}>
                            <View style={{alignItems:"center", justifyContent:"center"}}>
                                <MaterialCommunityIcons name="postage-stamp" size={40} color="grey" />
                            </View>
                            <View style={{marginVertical:16}}>
                                <View style={{marginBottom:16}}>
                                    <Text style={{fontSize:12, fontWeight:700, marginBottom:5}}>EMET 5</Text>
                                    <Text style={{fontSize:12, fontWeight:700, color:"#7C7CFC"}}>Rp. 60.000,00</Text>
                                </View>
                                <View style={{width:'auto', borderBottomWidth:1, justifyContent:'center', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}></View>
                                <View style={{marginVertical:16}}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <View>
                                            <Text style={{fontSize:12, fontWeight:500, opacity:0.8, marginBottom:5}}>5 e-Materai</Text>
                                            <Text style={{fontSize:12, fontWeight:500, opacity:0.8}}>Biaya Platform</Text>
                                        </View>
                                        <View style={{alignItems:"flex-end"}}>
                                            <Text style={{fontSize:12, fontWeight:500, opacity:0.8, marginBottom:5}}>@10.000</Text>
                                            <Text style={{fontSize:12, fontWeight:500, opacity:0.8}}>5 @2.000</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width:'auto', borderBottomWidth:1, justifyContent:'center', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}></View>
                            </View>
                            <ButtonFirst title='Beli Sekarang' style={{borderRadius:5}}/>
                            <ButtonFirst title='Batal' onPress={closeModal} style={{borderRadius:5, marginTop:16}}/>
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
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
        paddingHorizontal:16,
        height: 50,
        backgroundColor: '#fff'
    },
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
    }
})