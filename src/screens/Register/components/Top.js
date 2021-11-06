import React from 'react';
import {Image, StyleSheet, View, Dimensions, Text} from 'react-native';

export default function Top({title, image})
{
    return <>
    <View style={styles.imageView}>
        <Image source={image} style={styles.top}/>
    </View>
    <Text style={styles.title}>{title}</Text>
    </>
}

const styles = StyleSheet.create({
    imageView:{
        
        justifyContent:'center',
        alignItems: 'center'
    },
    top:{
        height: 120,
        width: 120,
        marginTop: '0%'
    },
    title:{
        width:"100%",
        textAlign: "center",
        fontSize: 30,
        marginTop: '5%',
        lineHeight: 26,
        color:"white",
        fontWeight:"bold",
        padding:10,
    },
})