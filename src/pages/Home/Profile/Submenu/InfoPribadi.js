import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Animated, TouchableWithoutFeedback, Touchable} from 'react-native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const profile = require('../../../../assets/Images/profileme.png')

export default function InfoPribadi({ navigation }) {

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
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Navigate')} style={{ height: 50, justifyContent: "center" }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>Informasi Pribadi</Text>
                    <View></View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 32 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={profile} style={{ width: 105, height: 105, borderRadius: 50 }} />
                        <TouchableOpacity onPress={openModal} style={styles.bgProfile}>
                            <Feather name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Biodata */}
                <View style={{ paddingLeft: 16, marginTop: 28 }}>
                    <View >
                        <Text style={{ fontSize: 14, fontWeight: '400' }}>Nama Lengkap</Text>
                        <Text style={{ fontSize: 14, fontWeight: '800', marginTop: 6 }}>Datanode Naralogi</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontSize: 14, fontWeight: '400' }}>Email</Text>
                        <Text style={{ fontSize: 14, fontWeight: '800', marginTop: 6 }}>datanode.naralogi@gmail.com</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text>Nomor HP</Text>
                        <Text style={{ fontSize: 14, fontWeight: '800', marginTop: 6 }}></Text>
                    </View>
                </View>

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
                                <View>
                                    <Text style={{paddingLeft:20, marginTop:20, fontSize:16}}>Ubah Foto Profile</Text>
                                    <View style={{width:'auto', marginHorizontal:20, height:15, borderBottomWidth:1, justifyContent:'center', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}></View>
                                    <View style={styles.barMenu}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <MaterialIcons name="insert-photo" size={24} color="lightblue" />
                                            <Text style={{fontSize:16, marginLeft:10}}>Pilih Galeri</Text>
                                        </View>
                                    </View>
                                    <View style={styles.barMenu}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Feather name="camera" size={24} color="lightblue" />
                                            <Text style={{fontSize:16, marginLeft:10}}>Ambil dengan Kamera</Text>
                                        </View>
                                    </View>
                                    <View style={styles.barMenuBottom}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <MaterialIcons name="cancel" size={24} color="red" />
                                            <Text style={{fontSize:16, marginLeft:10}}>Batalkan</Text>
                                        </View>
                                    </View>
                                </View>
                            </Animated.View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        height: 50,
        backgroundColor: '#fff'
    },
    bgProfile: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 100
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
        height:250,
        position:'absolute',
        bottom:0,
        borderTopRightRadius:15,
        borderTopLeftRadius: 15
    },
    barMenu : {
        width:'auto',
        marginHorizontal:20,
        height:60,
        borderBottomWidth:1,
        justifyContent:'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    barMenuBottom : {
        width:'auto',
        marginHorizontal:20,
        height:60,
        justifyContent:'center',
    }
})
