import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TextInput,View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function Form({placeholder, placeholder1, placeholder2, placeholder3, iconEnter, navigation})
{  
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [imageUrl, setPhoto] = React.useState("");

    const register = () =>{};
    return (
        <SafeAreaView>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder={placeholder}
            placeholderTextColor='#999'
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder={placeholder1}
            placeholderTextColor='#999'
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPhoto(text)}
            value={imageUrl}
            placeholder={placeholder3}
            placeholderTextColor='#999'
            onSubmitEditing={register}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder={placeholder2}
            placeholderTextColor='#999'
            secureTextEntry= {true}
          />
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.buttonBack}>
              <Image style={styles.image} source={iconEnter} onPress={() => navigation.push('Login')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} raised onPress={register}>
              <Image style={styles.image} source={iconEnter}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 45,
      margin: 12,
      marginHorizontal:'15%',
      borderWidth: 1,
      fontSize:16,
      padding: 10,
      paddingHorizontal: 15,
      borderColor: '#0B2027',
      color: '#FFF',
      borderRadius: 18,
      backgroundColor: '#0B2027'
    },
    view:{
      flexDirection:'row',
      width: '70%',
      marginHorizontal:'15%',
      justifyContent: 'space-between',
  },
  buttonBack:{
    marginTop: 16,
    backgroundColor: '#0B2027',
    paddingVertical: 12,
    borderRadius:20,
    width: 80,
    alignItems: 'center',
    transform: [{ rotate: "180deg" }]
},
  button:{
      marginTop: 16,
      backgroundColor: '#0B2027',
      paddingVertical: 12,
      borderRadius:20,
      width: 80,
      alignItems: 'center'
  },
  image:{
      width:'30%',
      marginHorizontal:'35%'
  },
  

  
  });
