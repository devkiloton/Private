import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
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

const createChat =() => async () => {
    await db
    .collection('chats')
    .add({
        chatName: input,
    })
    .then(() => {
        navigation.goBack();
    })
    .catch((error) => alert(error));
};

    return (
        <View>
            <Input 
                placeholder='Enter a chat name'
                value={input}
                onChangeText={(text) => setInput(text)}
            />
            <TouchableOpacity style={styles.button} onPress={createChat}>
                <Text style={styles.textButton}>
                    Crete new chat
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#fff',
        alignSelf:'center',
        width:120,
        borderRadius:16,
        padding:10
    },
    textButton:{
        textAlign:'center',
    }
})

export default AddChatScreen
