import React from 'react';
import {Image, StyleSheet, Dimensions, Text} from 'react-native';

export default function Top({title, image})
{
    return <>
    <Image source={image} style={styles.top}/>
    <Text style={styles.title}>{title}</Text>
    </>
}

const styles = StyleSheet.create({
    top:{
        height: 130,
        width: '35%',
        marginHorizontal: '30%',
        marginTop: '20%'
    },
    title:{
        width:"100%",
        textAlign: "center",
        fontSize: 30,
        marginTop: '5%',
        lineHeight: 26,
        color:"white",
        fontWeight:"bold",
        padding:16,
    },
})