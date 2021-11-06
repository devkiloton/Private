import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { auth, db } from '../firebase';

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

    function format_time(s) {
        var date = new Date(s * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30 format
        var formattedTime = hours + ':' + minutes.substr(-2);

        return formattedTime;
      }

    function isThereMessage(boolean)
    {
        if(boolean)
        {
            if(boolean?.[0]?.displayName === auth.currentUser.displayName)
            {
                return <>You: {boolean?.[0]?.message}</>
            }
            else if(boolean?.[0]?.displayName == null)
            {
                return 'Hey, write something here!'
            }
            else{
                return <>{boolean?.[0]?.displayName}: {boolean?.[0]?.message}</>
            }
        }
    }

    return (
        <ListItem.Swipeable

            leftContent={
                <TouchableOpacity style={styles.bgListLeft}>
                    <Text style={styles.textListLeft}>Delete</Text>
                </TouchableOpacity>
            }

            rightContent={
                <TouchableOpacity style={styles.bgListRight}>
                    <Text style={styles.textListRight}>Archive</Text>
                </TouchableOpacity>
            }

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
                    {isThereMessage(chatMessages)}
                </ListItem.Subtitle>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail' style={styles.timeText}>
                    {format_time(chatMessages?.[0]?.timestamp)}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem.Swipeable>
        
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
    bgListRight:{
        backgroundColor: '#76cf7d',
        borderRadius: 20,
        marginHorizontal: 10,
        height: 80,
        marginVertical: 3,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#444',
        justifyContent:'center',
        alignItems:'center'
    },
    textListRight:{
        fontFamily:'MontserratBold',
        color:'#FFF'
    },
    bgListLeft:{
        backgroundColor: '#eb3f3f',
        borderRadius: 20,
        marginHorizontal: 10,
        height: 80,
        marginVertical: 3,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#444',
        justifyContent:'center',
        alignItems:'center'
    },
    textListLeft:{
        fontFamily:'MontserratBold',
        color:'#FFF',
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
    },
    timeText:{
        position:'absolute',
        top:0,
        right:1,
        color:'#999',
    },
})

export default CustomListItem
