import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Esgn, Emet, Bundling } from '../Topup/Tab Topbar'

const TopTabs = createMaterialTopTabNavigator();

export default function Topup({navigation}) {
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
            <TopTabs.Screen name='Emet' component={Emet} />
            <TopTabs.Screen name='Esgn' component={Esgn} />
            <TopTabs.Screen name='Bundling' component={Bundling} />
        </TopTabs.Navigator>
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
    }
})