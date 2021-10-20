import React,{useEffect} from 'react';
import {Image, StyleSheet, TextInput,View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { auth } from '../../../../firebase';

export default function Form({placeholder1, placeholder2, iconEnter, helpButtonText, navigation})
{  
  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
        if(authUser)
        {
            navigation.replace('Home');
        }
    });

    return unSubscribe;
}, [])

const signIn = ()=>{
    
}


    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder={placeholder1}
          placeholderTextColor='#999'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder={placeholder2}
          placeholderTextColor='#999'
          secureTextEntry= {true}
        />
        <View style={styles.view}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.helpButton}>{helpButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={signIn}>
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
      justifyContent: 'space-between'
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
  helpButton:{
      color:'white',
      justifyContent:'space-around'
  }
  });
