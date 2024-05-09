import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Pdf from 'react-native-pdf'

export default function DetailDoc({route}) {
  const {selectedDoc} = route.params

  return (
    <View style={styles.container}>
        <View>
            <Text>Detail :</Text>
            <Text>File: {selectedDoc.uri}</Text>
            <Text>Nama: {selectedDoc.name}</Text>
            <Text>Ukuran: {selectedDoc.size} bytes</Text>
        </View>

        {/* <Pdf
        source={{uri: selectedDoc.uri, cache: true}} // Sumber file PDF
        onLoadComplete={(numberOfPages,filePath)=>{console.log(`number of pages: ${numberOfPages}`);}}
        onPageChanged={(page,numberOfPages)=>{console.log(`current page: ${page}`);}}
        onError={(error)=>{console.log(error);}} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})