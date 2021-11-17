import { NavigationContainer } from '@react-navigation/native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
//import { Button } from 'react-native-elements/dist/buttons/Button'
import CustomListItem from '../../../components/CustomListItem'
import { auth,db } from '../../../firebase'
import Archives from '../Archives/Archives'
const HomeScreen = ({navigation}) => {

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
                title: 'Private',
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
                    if(archived == true)
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
            <View style={styles.button}>
                <View style={styles.subButton}>
                <TouchableOpacity onPress={()=>navigation.navigate('Archives')}>
                    <Avatar source={{uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/FFFFFF/external-cabinet-interior-flatart-icons-outline-flatarticons-6.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar onPress={()=>navigation.navigate('AddGroups')} source={{ uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/ffffff/external-group-business-and-teamwork-flatart-icons-outline-flatarticons.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar onPress={()=>navigation.navigate('SearchChat')} source={{ uri: 'https://img.icons8.com/ios/96/FFFFFF/search--v1.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AddChat')}>
                    <Avatar source={{ uri: 'https://img.icons8.com/ios/96/ffffff/plus--v1.png'}}/>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    button:{
        flex:1,
        position:'absolute',
        borderRadius: 20,
        paddingVertical: 5,
        backgroundColor: '#071318F5',
        bottom:20,
        width: 300,
        alignSelf: 'center',
        height:70,
        borderWidth: 1,
        borderColor: '#444'
    },
    subButton:{
        width: 290,
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        transform: [{scale: 1}],
        justifyContent: 'space-around',
        alignItems: 'center',
        flex:1

    }
})
export default HomeScreen
