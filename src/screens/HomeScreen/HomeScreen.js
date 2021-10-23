import { NavigationContainer } from '@react-navigation/native'
import React, {useLayoutEffect} from 'react'
import { SafeAreaView,  ScrollView, StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../../../components/CustomListItem'
import { auth,db } from '../../../firebase'
const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
            navigation.setOptions({
                title: 'Private',
                headerTitleStyle: {
                    color:'#FFFFFF',
                    fontFamily: 'MontserratBold',
                    fontSize: 30,
                },
                headerRight: ()=> (
                    <View style={{marginRight: 20, backgroundColor: '#FFF', borderRadius: 10}}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
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
