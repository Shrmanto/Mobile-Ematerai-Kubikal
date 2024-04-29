import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from 'react'
import { Home, Dokumen, Kontak, Notification } from '../pages/Home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { Semua, Selesai, Berjalan, Dibatalkan, Draft } from "../pages/Home/Nav Dokumen"


const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
    borderRadius: 10,
  }
}

const TopTabs = createMaterialTopTabNavigator();

function TopTabsDokumen() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setIsCollapsed(true);
  };

    return (
    <View style={{flex:1, marginTop:30}}>
        {/* Header Dokumen */}
        <View style={{backgroundColor:'#fff', height:50}}>
          <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', height:50, paddingHorizontal:16}}>
            {!isSearching ? (
              <>
                <Text></Text>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Dokumen</Text>
                <Feather name="search" size={24} color="black" onPress={toggleSearch}/>
              </>
            ):(
              <View style={{ flexDirection: "row", marginLeft: "auto", alignItems:"center"}}>
                <TextInput style={{ width:306, height:30, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5 }} placeholder='Cari Dokumen ...' />
                <Feather name="x" size={24} color="black" style={{marginLeft:26}} onPress={toggleSearch} />
              </View>
            )}
          </View>
        </View>
        <TopTabs.Navigator
         screenOptions={{
            tabBarLabelStyle: { fontSize:10 }
         }}
        >
            <TopTabs.Screen name='semua' component={Semua} />
            <TopTabs.Screen name='selesai' component={Selesai} />
            <TopTabs.Screen name='berjalan' component={Berjalan} />
            <TopTabs.Screen name='dibatalkan' component={Dibatalkan}/>
            <TopTabs.Screen name='draft' component={Draft} />
        </TopTabs.Navigator>
    </View>
    )
}

function TopTabsKontak({navigation}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setIsCollapsed(true);
  };

    return (
    <View style={{flex:1, marginTop:30}}>
        {/* Header Dokumen */}
        <View style={{backgroundColor:'#fff', height:50}}>
          <View style={{alignItems:'center', flexDirection:'row', height:50, paddingHorizontal:16}}>
            {!isSearching ? (
              <>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Kontak</Text>
                <View style={{ flexDirection: "row", marginLeft: "auto" }}>
                  <Feather name="search" size={24} color="black" style={{ marginHorizontal: 20 }} onPress={toggleSearch} />
                  <TouchableOpacity onPress={() => navigation.navigate('KontakBaru')}>
                    <AntDesign name="plus" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={{ flexDirection: "row", marginLeft: "auto", alignItems:"center"}}>
                <TextInput style={{ width:306, height:30, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5 }} placeholder='Cari Kontak ...' />
                <Feather name="x" size={24} color="black" style={{marginLeft:26}} onPress={toggleSearch} />
              </View>
          )}
          </View>
        </View>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='kontak' component={Kontak} />
        </Tab.Navigator>
    </View>
    )
}

function TopTabsNotifikasi() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setIsCollapsed(true);
  };

    return (
    <View style={{flex:1, marginTop:30}}>
        {/* Header Dokumen */}
        <View style={{backgroundColor:'#fff', height:50}}>
          <View style={{justifyContent:"center", height:50, paddingHorizontal:16}}>
            {!isSearching ? (
              <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Notifikasi</Text>
                <Feather name="search" size={24} color="black" onPress={toggleSearch}/>
              </View>
            ):(
              <View style={{ flexDirection: "row", marginLeft: "auto", alignItems:"center"}}>
                <TextInput style={{ width:306, height:30, paddingHorizontal:20, backgroundColor:"#FFFFFF", borderColor:"#D4D5D9", borderWidth:1, borderRadius:5 }} placeholder='Cari Notifikasi ...' />
                <Feather name="x" size={24} color="black" style={{marginLeft:26}} onPress={toggleSearch} />
              </View>
            )}
          </View>
        </View>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Notifikasi' component={Notification} />
        </Tab.Navigator>
    </View>
    )
}

function TabGroup() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Entypo name="home" size={24} color={focused ? "#000000" : "#666666"} />
                <Text style={{fontSize:12, marginTop:2}}>Home</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Dokumen" 
        component={TopTabsDokumen} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="document" size={24} color={focused ? "#000000" : "#666666"} />
                <Text style={{fontSize:12, marginTop:2}}>Dokumen</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Unggah" 
        component={Dokumen} 
        options={{
          tabBarIcon: ({focused})=> {
            return(
              <View
              style={{
                top: Platform.OS == "ios" ? -10 : -30,
                width: Platform.OS == "ios" ? 50 : 70,
                height: Platform.OS == "ios" ? 50 : 70,
                borderRadius: Platform.OS == "ios" ? 25 : 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#7C7CFC"
              }}
              >
                <AntDesign name="addfile" size={24} color="#fff" />
                <Text style={{fontSize:10, marginTop:2, color:'#fff'}}>Unggah</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Kontak" 
        component={TopTabsKontak} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="people" size={24} color={focused ? "#000000" : "#666666"} />
                <Text style={{fontSize:12, marginTop:2}}>Kontak</Text>
              </View>
            )
          }
        }}
        />
        <Tab.Screen 
        name="Notification" 
        component={TopTabsNotifikasi} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="notifications-sharp" size={24} color={focused ? "#000000" : "#666666"} />
                <Text style={{fontSize:12, marginTop:2}}>Notification</Text>
              </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    )
}

export default function Navigation() {
    return(
        <TabGroup />
    )
}