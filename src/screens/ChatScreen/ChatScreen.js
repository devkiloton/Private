import React, { useLayoutEffect } from 'react'
import { TextInput, StyleSheet, Text, View, SafeAreaView, StatusBar, KeyboardAvoidingView, PlatformColor, Platform, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';

const ChatScreen = ({navigation, route}) => {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:`${route.params.chatName}`,
            headerBackTitleVisible: false,
            headerTitleAlign:'left',
            headerTitle:() =>(
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                >
                    <Avatar style={styles.avatar} rounded source={{uri: `https://img.icons8.com/windows/32/${getRndInteger(100,999)}${getRndInteger(100,999)}/minecraft-anonymous.png`}}/>
                    <Text style={styles.headerTitle}>{route.params.chatName}</Text>
                </View>
            ),
        });
    },[navigation])
    
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar style='light'/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={90}>
                <>
                    <ScrollView>
                        {/* Chat goes here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholderTextColor='#999' style={styles.textInput} placeholder='Write something here'/>
                    </View>
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    },
    text:{
        color:'#FFF'
    },
    container:{

    },
    footer:{

    }
})

export default ChatScreen
