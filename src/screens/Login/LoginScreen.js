import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Button, Input, Image} from 'react-native-elements'
import Top from './components/Top'
import Form from './components/Form'
import Bottom from './components/Bottom'
import mocks from '../../mocks/Login'
export default function LoginScreen({navigation})
{
    return <>
        <KeyboardAvoidingView behavior='padding' style={styles.background}>
            <StatusBar style='light'/>
            <Top {...mocks.top}/>
            <Form navigation={navigation} {...mocks.form} {...mocks.buttonEnter}/>
            <Bottom navigation={navigation} {...mocks.bottom}/>
        </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#071318",
    },
    text:{
        color:'#AAA',
        fontSize: 16,
    },
    logo:{
        width: 160,
        height: 160,
        marginHorizontal: '25%',
        marginTop: '15%'
    }
})