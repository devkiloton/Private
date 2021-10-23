import { NavigationContainer } from '@react-navigation/native'
import React, {useLayoutEffect} from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
//import { Button } from 'react-native-elements/dist/buttons/Button'
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
                        <TouchableOpacity style={{marginLeft: 5, borderRadius: 10}}>
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

    return (
        <SafeAreaView>
            <ScrollView style={{color:'#fff'}}>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
            </ScrollView>
            <View style={styles.button}>
                <View style={styles.subButton}>
                <TouchableOpacity>
                    <Avatar source={{uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/FFFFFF/external-cabinet-interior-flatart-icons-outline-flatarticons-6.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar source={{ uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/ffffff/external-group-business-and-teamwork-flatart-icons-outline-flatarticons.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Avatar source={{ uri: 'https://img.icons8.com/ios/96/FFFFFF/search--v1.png'}}/>
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
        backgroundColor: '#071318ED',
        bottom:20,
        width: 320,
        alignSelf: 'center',
        height:80,
        borderWidth: 1,
        borderColor: '#444'
    },
    subButton:{
        width: 250,
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        transform: [{scale: 1.2}],
        justifyContent: 'space-around',
        alignItems: 'center',
        flex:1

    }
})
export default HomeScreen
