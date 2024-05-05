import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { primaryColor, textInputColor } from './Color'

const TextInputOne = () => {
    return (
        <TextInput style={{width:360, height:40, paddingHorizontal:20, backgroundColor: textInputColor, borderColor: primaryColor, borderWidth:1, borderRadius:20}} />
    )
}

const styles = StyleSheet.create({})

export default TextInputOne