import { NavigationContainer } from '@react-navigation/native'
import React, {useLayoutEffect} from 'react'
import { SafeAreaView,  ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../../../components/CustomListItem'
import { auth,db } from '../../../firebase'
const HomeScreen = ({navigation}) => {

    const signOutUser = () => {
        auth.signOut().then(()=>{
            navigation.replace('Login');
        });
    };

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

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
