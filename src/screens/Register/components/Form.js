import React from 'react';
import {Image, StyleSheet, TextInput,View, Text, SafeAreaView} from 'react-native';

export default function Form({placeholder, placeholder1, placeholder2, placeholder3})
{  
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [photo, setPhoto] = React.useState("");
    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={email}
          placeholder={placeholder}
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder={placeholder1}
          placeholderTextColor='white'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder={placeholder2}
          placeholderTextColor='white'
          secureTextEntry= {true}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoto(text)}
          value={password}
          placeholder={placeholder3}
          placeholderTextColor='white'
          secureTextEntry= {true}
        />
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
  });
