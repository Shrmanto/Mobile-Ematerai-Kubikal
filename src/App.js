import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home, Dokumen, Kontak, Notification } from './pages';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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

export default function App() {
  return (
    <NavigationContainer>
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
        component={Dokumen} 
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
