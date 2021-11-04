import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import LoginScreen from './src/screens/Login/LoginScreen';
import  RegisterScreen from './src/screens/Register/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AddChatScreen from './src/screens/AddChatScreen/AddChatScreen';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';
import { auth } from './firebase';
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
  console.log(auth.currentUser)

  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!loadedFont){
    return <AppLoading/>;
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator /*initialRouteName='Home'*/ screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='AddChat' component={AddChatScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
