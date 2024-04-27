import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
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
        backgroundColor: '#7C7CFC'
    }
})

export default Button