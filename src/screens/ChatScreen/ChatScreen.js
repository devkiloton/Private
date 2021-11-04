import React, { useLayoutEffect, useState, useEffect } from 'react'
import { TextInput, StyleSheet, Text, View, SafeAreaView, StatusBar, KeyboardAvoidingView, PlatformColor, Platform, ScrollView, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { auth, db } from '../../../firebase';
import { collection, query, where } from "firebase/firestore";

const ChatScreen = ({navigation, route}) => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerTitleAlign:'left',
            headerTitle:() =>(
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                >
                    <Avatar 
                    style={styles.avatar} 
                    rounded 
                    source={{
                        uri: 
                            messages[0]?.data.photoURL
                        }}
                    />
                    <Text style={styles.headerTitle}>{route.params.chatName}</Text>
                </View>
            ),
        });
    },[navigation, messages])

    const [receiverEmail, setReceiverEmail] = useState('');

    useEffect(()=>{
        const unsubscribe = db
        .collection(auth.currentUser.email)
        .doc(route.params.id)
        .onSnapshot((doc) => 
            setReceiverEmail(doc.data().email)
        );
        return unsubscribe;
    })

    const sendMessage = () => {
        Keyboard.dismiss();

        db.collection(auth.currentUser.email).doc(receiverEmail).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL

        });

        db.collection(receiverEmail).doc(auth.currentUser.email).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL

        });

        setInput('');
    };

    useLayoutEffect(() => {
        const unsubscribe = db
            .collection(auth.currentUser.email)
            .doc(route.params.id)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
                setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))
            return unsubscribe
    }, [route])
    
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar style='light'/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={90}>
                <TouchableWithoutFeedback>
                    <>
                        <ScrollView>
                            {messages.map(({id, data}) =>
                                data.email === auth.currentUser.email ? (
                                    <View style={styles.receiver} key={id}>
                                        <Avatar source={{uri:data.photoURL}}/>
                                        <Text style={styles.receiverText}>{data.message}</Text>
                                    </View>
                                ) : (
                                    <View style={styles.sender}>
                                        <Avatar source={{uri:data.photoURL}}/>
                                        <Text style={styles.senderText}>{data.message}</Text>
                                        <Text style={styles.senderName}>{data.displayName}</Text>
                                    </View>
                                )
                            )}
                        </ScrollView>
                        <View style={styles.footer}>
                            <TextInput
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                onSubmitEditing={sendMessage}
                                placeholderTextColor='#999' 
                                style={styles.textInput} 
                                placeholder='Write something here'
                            />
                            <TouchableOpacity backgroundColor='#cec' onPress={sendMessage} activeOpacity={0.5}>
                                <View style={styles.avatarBg}>
                                    <Avatar containerStyle={styles.avatarSend} source={{ uri: 'https://img.icons8.com/external-prettycons-lineal-prettycons/49/FFFFFF/external-send-social-media-prettycons-lineal-prettycons.png'}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerTitle:{
        color:'#FFFFFF',
        fontFamily: 'MontserratBold',
        fontSize: 30,
        marginLeft:10
    },
    avatar:{
        backgroundColor:'#fff',
        width: 36,
        height: 36,
        borderRadius: 10,
    },
    textInput:{
      height: 45,
      width: '85%',
      borderWidth: 1,
      fontSize:16,
      padding: 10,
      paddingHorizontal: 15,
      borderColor: '#0B2027',
      color: '#FFF',
      borderRadius: 18,
      backgroundColor: '#0B2027',
    },
    text:{
        color:'#FFF'
    },
    footer:{
        flexDirection: 'row',
        alignItems:'center',
        width:'95%',
        padding:15,
        alignSelf: 'center',
        justifyContent:'space-between'
    },
    avatarSend:{
        transform: [{ scale: 0.7 }],
        alignSelf:'center'
    },
    avatarBg:{
        height:45,
        width:45,
        backgroundColor:'#0B2027',
        borderRadius: 18,
        justifyContent: 'center'
    },
    receiver:{
        padding: 12,
        backgroundColor:'#0B2027',
        alignSelf:'flex-end',
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth:'80%',
        position: 'relative'
    },
    receiverText:{
        color:'#FFF',
    },
    sender:{
        padding: 12,
        backgroundColor:'#0B2027',
        alignSelf:'flex-start',
        borderRadius: 20,
        marginLeft: 15,
        marginBottom: 20,
        maxWidth:'80%',
        position: 'relative'
    },
    senderText:{
        color:'#FFF',
    },
    senderName:{
        color: '#999'
    }
})

export default ChatScreen
