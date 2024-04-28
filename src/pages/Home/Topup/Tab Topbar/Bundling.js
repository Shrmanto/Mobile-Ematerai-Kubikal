import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Bundling() {
  return (
    <View style={styles.container}>
      <View style={styles.cardEmet}>
        <View style={{flexDirection:'row', marginTop:14, marginBottom:10}}>
          <MaterialCommunityIcons name="postage-stamp" size={40} color="grey" style={styles.iconStamp} />
          <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:16}}>EMET + ESGN 5</Text>
            <Text style={{fontSize:10}}>5 e-Materai + 5 e-Signature + Biaya Platform</Text>
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={styles.linesHorizontal}></View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:14,}}>
          <Text style={{marginTop:14, fontSize:18, color:'#7C7CFC'}}>Rp 130.000</Text>
          <TouchableOpacity style={styles.btnBeli}>
            <Text style={{color:'#7C7CFC'}}>Beli</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    alignItems:'center',
    paddingHorizontal:16
  },
  cardEmet: {
    width: 360,
    height:125,
    backgroundColor: '#fff',
    borderRadius:8,
    elevation:2
  },
  iconStamp : {
    marginLeft:14,
    marginRight:12
  },
  linesHorizontal: {
    width: '90%',
    height:1,
    backgroundColor: 'black',
    opacity:0.2
  },
  btnBeli : {
    width:70,
    height:30,
    backgroundColor: '#C8C8FA',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    marginTop:12,
  }
})