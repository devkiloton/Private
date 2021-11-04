import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { auth, db } from '../firebase';
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const CustomListItem = ({id, chatName, enterChat}) => {
    
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(()=>{
        const unsubscribe = db
        .collection(auth.currentUser.email)
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setChatMessages(snapshot.docs.map((doc) => doc.data()))
        );
        return unsubscribe;
    })
    
    return (
        <ListItem 
            onPress={() => enterChat(id, chatName)} 
            key={id} 
            bottomDivider
            containerStyle={styles.bgList}>
            <Avatar 
            rounded
            source={{
                uri: chatMessages?.[0]?.photoURL ||
                `https://img.icons8.com/windows/32/000000/minecraft-anonymous.png`
            }}
            containerStyle={styles.avatar}
            />
            <ListItem.Content>
                <ListItem.Title style={styles.listItemTitle}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail' style={styles.listItemSubTitle}>
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        
    )
}

const styles = StyleSheet.create({
    bgList:{
        backgroundColor: '#0B2027',
        borderRadius: 20,
        marginHorizontal: 10,
        height: 80,
        marginVertical: 3,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#444'
    },
    avatar:{
        backgroundColor:'#fff',
        width: 48,
        height: 48,
        borderRadius: 15,
    },
    listItemTitle:{
        color: '#FFF',
        fontSize: 19,
        fontFamily: 'MontserratBold'
    },
    listItemSubTitle:{
        color: '#CCC',
        fontSize: 15
    }
})

export default CustomListItem
