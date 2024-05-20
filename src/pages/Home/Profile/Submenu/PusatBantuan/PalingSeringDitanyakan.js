import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Animated, Modal, TouchableWithoutFeedback, Button } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { FullWindowOverlay } from 'react-native-screens';
import { primaryColor } from '../../../../../components/Color';



const profileImg = require('../../../../../assets/Images/profileme.png')
const iconShield = require('../../../../../assets/Icons/shield.png')
const iconPanduan = require("../../../../../assets/Icons/Panduan.png")


export default function PalingSeringDitanyakan({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    

  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Bantuan')} style={{height:50, justifyContent:"center"}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Pusat Bantuan</Text>
            <Text></Text>
        </View>


        <View style={{width:FullWindowOverlay, height:'auto', paddingVertical:16, backgroundColor:"#fff", marginTop:5}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:5}}>Setelah akun aktif, apakah bisa langsung memulai pembubuhan tanda tangan dan meterai elektronik?</Text>
            </View>    

            <View style={{alignItems:'center', paddingTop:17}}>
                <View style={{width:360, height:121, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>Untuk proses pembubuhan tanda tangan dapat dilakukan setelah pengguna melakukan eKYC sedangkan untuk proses pembubuhan meterai elektronik saja bisa dilakukan setelah akun aktif (tanpa eKYC).</Text>
                </View>
            </View>

            <View style={styles.barMenu}>
                <View style={{alignItems:"flex-start"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:30}}>Proses eKYC berlangsung berapa lama?</Text>
                </View>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={{width:360, height:70, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>eKYC pada aplikasi eMet akan diverifikasi maksimal 1x24jam.</Text>
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{alignItems:"flex-start"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:30}}>Apakah eKYC berbayar?</Text>
                
                </View>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={{width:360, height:121, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>Untuk setiap proses penerbitan sertifikat elektronik akan dikenakan biaya berlangganan sebesar Rp10.000/tahun. sertifikat elektronik akan didapatkan setelah proses eKYC telah berhasil dilakukan.</Text>
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{alignItems:"flex-start"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:30}}>Jika eKYC saya ditolak selanjutnya bagaimana?</Text>
                
                </View>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={{width:360, height:150, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>Apabila eKYC ditolak silahkan mengirimkan data pendukung berupa SIM/ijazah/paspor dan dilengkapi email terkendala ke email datanode.naralogi@gmail.com dengan subject data pendukung atau bisa menghubungi tim support eMet melalui WhatsApp atau email untuk konfirmasi lebih lanjut.</Text>
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:5}}>Apakah bisa menambahkan pihak lain yang belum memiliki aplikasi Kubikal </Text>
                
                </View>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={{width:360, height:121, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>Bisa, pihak lain yang ditambahkan  akan mendapatkan undangan pembubuhan tanda tangan dan meterai elektronik melalui email dan pihak tersebut akan diarahkan untuk unduh, install, registrasi serta eKYC dan selanjutnya bisa melakukan pembubuhan  tanda tangan dan meterai pada dokumen yang sudah dikirimkan. Untuk undangan sudah melakukan proses KYC dan sertifikat elektronik telah terbit/ menerima email Electronic Certificate Provision dari PERURI.</Text>
                </View>
            </View>
            <View style={styles.barMenu}>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:14, fontWeight:'bold', paddingLeft:5}}>Apakah saldo ESGN dan EMET bisa dibeli satuan? </Text>
                
                </View>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={{width:360, height:150, alignItems:"center", backgroundColor:"#D9D9D9", borderRadius:15, paddingHorizontal:24, paddingVertical:16, flexDirection:"row"}}>
                    <Text style={{fontSize:14}}>Pembelian saldo ESGN dan EMET disediakan dalam paket-paket yang bisa dibeli dari menu Top Up. Pembelian saldo ESGN saat ini tidak dilayani secara satuan. Untuk penggunaan meterai elektronik satuan, kami menyediakan layanan yang bisa diakses melalui laman web/ browser di https:// sign.emet.id atau melalui aplikasi eMET setelah mengunduh di App Store/ PlayStore tanpa registrasi akun bisa melakukan proses pembubuhan/ transaksi meterai elektronik secara satuan.</Text>
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
        backgroundColor:'#fff'
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
        marginVertical:10,
        height:50,
        borderTopWidth:1,
        justifyContent:'center',
        borderTopColor: 'rgba(0, 0, 0, 0.1)'
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