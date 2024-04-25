import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home, Dokumen, Kontak, Notification } from '../pages';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Semua, Selesai, Berjalan, Dibatalkan, Draft } from "../pages/Nav Dokumen"
import { Feather } from '@expo/vector-icons';


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

function TopTabsGroup() {
    return (
    <View style={{flex:1, marginTop:30}}>
        {/* Header Dokumen */}
        <View style={{backgroundColor:'#fff', height:50}}>
          <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', height:50, paddingHorizontal:15}}>
            <Text></Text>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Dokumen</Text>
            <Feather name="search" size={24} color="black" />
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
        component={TopTabsGroup} 
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
        component={Kontak} 
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
        component={Notification} 
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
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
    )
}