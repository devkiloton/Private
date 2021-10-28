import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { auth, db } from '../../../firebase'

const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState('');

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

const createChat = async () => {
    await db
    .collection('chats')
    .add({chatName: input})
    .then(() => {navigation.goBack()})
    .catch((error) => alert(error));
};

    return (
        <View>
            <TextInput 
                placeholder='Enter a chat name'
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                style={styles.input}
                placeholderTextColor='#999'
            />
            <TouchableOpacity style={styles.button} onPress={createChat}>
                <Text style={styles.textButton}>
                    Create new chat
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#0B2027',
        alignSelf:'center',
        width:130,
        borderRadius:16,
        padding:10
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
