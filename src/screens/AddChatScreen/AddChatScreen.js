import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { auth, db } from '../../../firebase'
import { collection, doc, setDoc } from "firebase/firestore"; 
const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState('');
    const [inputName, setInputName] = useState('');    

    useLayoutEffect(() => {
        navigation.setOptions({
            title:'Add a new chat',
            headerTitleStyle: {
                    color:'#FFFFFF',
                    fontFamily: 'MontserratBold',
                    fontSize: 30,
            }
        });
    }, [navigation]);


const createChatSender = async () => {
    await db
    .collection(auth.currentUser.email)
    .doc('data')
    .collection('chats')
    .doc(input)
    .set({
        chatName: inputName,
        email:input,
        archived: false
        })
    .then(() => {navigation.goBack()})
    .catch((error) => alert(error));
    
    db
    .collection(input)
    .doc('data')
    .collection('chats')
    .doc(auth.currentUser.email)
    .set({
        chatName: auth.currentUser.displayName,
        email:auth.currentUser.email,
        archived: false
            })
    .then(() => {navigation.goBack()})
    .catch((error) => alert(error));
};

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.containerInput}>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructions}>Enter the receiver email</Text>
                <Text style={styles.instructions}>Enter the chat name</Text>
                <Text style={styles.instructions}>Enjoy it</Text>
            </View>
                <TextInput 
                    placeholder='Email address'
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    style={styles.input}
                    placeholderTextColor='#999'
                />
                <TextInput 
                    placeholder='Enter a chat name'
                    value={inputName}
                    onChangeText={(text) => setInputName(text)}
                    style={styles.input}
                    onSubmitEditing={createChatSender}
                    placeholderTextColor='#999'
                />
                <TouchableOpacity style={styles.button} onPress={createChatSender}>
                    <Text style={styles.textButton}>
                        Create new chat
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    instructionsContainer:{
        position:'absolute',
        bottom:190,
        alignSelf:'center'
    },
    instructions:{
        fontFamily:'MontserratRegular',
        color:'#FFF',
        marginTop:5,
        alignSelf:'center'
    },
    containerInput:{
    },
    button:{
        backgroundColor:'#0B2027',
        alignSelf:'center',
        width:130,
        borderRadius:16,
        padding:10,
        marginTop:10
    },
    textButton:{
        textAlign:'center',
        color:'#fff'
    },
    input:{
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
      backgroundColor: '#0B2027',
      
    }
})

export default AddChatScreen
