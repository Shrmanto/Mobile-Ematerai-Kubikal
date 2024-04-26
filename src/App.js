import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Landing from "./pages/Landing"
import SplashScreen from './pages/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Daftar" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
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
