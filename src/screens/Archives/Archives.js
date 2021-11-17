import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { auth,db } from '../../../firebase'
import CustomListItem from '../../../components/CustomListItem'
const Archives = ({navigation}) => {

    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(()=>{
            navigation.replace('Login');
        });
    };

    useEffect(() => {
        const unsubscribe = db
        .collection(auth.currentUser.email)
        .doc('data')
        .collection('chats')
        .onSnapshot(snapshot =>{
            setChats(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        })

        return unsubscribe;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Archives',
            headerTitleStyle: {
                color:'#FFFFFF',
                fontFamily: 'MontserratBold',
                fontSize: 30,
            },
            headerRight: ()=> (
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{marginLeft: 5, borderRadius: 10}}>
                        <Avatar source={{ uri: 'https://img.icons8.com/material/384/ffffff/menu-2--v2.png'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 5, backgroundColor: '#FFF', borderRadius: 10}}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight: 20, marginLeft:5 }} onPress={signOutUser}>
                        <Avatar source={{ uri: 'https://img.icons8.com/material-outlined/384/FFFFFF/export.png'}}/>
                    </TouchableOpacity>
                </View>
            ),
        });
}, [])
const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
        id,
        chatName,
    });
};

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{color:'#fff'}}>
                {chats.map(({id, data: { chatName, archived}}) => {
                    if(archived == false)
                    {
                        return null
                    }
                   return (<CustomListItem 
                    key={id} 
                    id={id} 
                    chatName={chatName}
                    archived={archived}
                    enterChat={enterChat}
                    />)
                })}
            <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Archives

const styles = StyleSheet.create({})
