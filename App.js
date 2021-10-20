import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import  RegisterScreen from './src/screens/Register/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    background: 'rgb(7, 19, 24)',
  },
};

const globalScreenOptions = {
  headerTitleStyle: {color:'#071318'},
  headerTintColor: 'white',
  headerShown: true
}

export default function App(){
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
