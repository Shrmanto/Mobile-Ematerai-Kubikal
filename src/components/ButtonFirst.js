import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { primaryColor } from './Color'

const ButtonFirst = (props) => {
    return (
        <TouchableOpacity 
         style={{...styles.btn, ...props.style }}
         onPress={props.onPress}
        >
            <Text style={{
                color: '#fff',
                fontWeight: '700'
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn : {
        width: 360,
        height: 40,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: primaryColor
    }
})

export default ButtonFirst