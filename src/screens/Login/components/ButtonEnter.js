import React from 'react';
import {Image, StyleSheet, Dimensions,View, Text, Button, TouchableOpacity} from 'react-native';

export default function ButtonEnter({iconEnter, helpButtonText})
{
    const signIn = ()=>{

    }
    return <>
    <View style={styles.view}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.helpButton}>{helpButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={signIn}>
            <Image style={styles.image} source={iconEnter}/>
        </TouchableOpacity>
    </View>
    <View></View>
    </>
}

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        width: '70%',
        marginHorizontal:'15%',
        justifyContent: 'space-between'
    },
    button:{
        marginTop: 16,
        backgroundColor: '#0B2027',
        paddingVertical: 12,
        borderRadius:20,
        width: 80,
        alignItems: 'center'
    },
    image:{
        width:'30%',
        marginHorizontal:'35%'
    },
    helpButton:{
        color:'white',
        justifyContent:'space-around'
    }
})