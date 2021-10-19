import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import  RegisterScreen from './src/screens/Register/RegisterScreen';
import mock from './src/mocks/Login'

const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    background: 'rgb(7, 19, 24)',
  },
};

export default function App(){
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen}>
        </Stack.Screen>
        <Stack.Screen name='Register' component={RegisterScreen}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071318',
  },
});
