import React from 'react';
import { StyleSheet,View, Text, TouchableOpacity} from 'react-native';

export default function Bottom({signupButtonText, navigation})
{
    return <>
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.helpButton}>{signupButtonText}</Text>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        width: '70%',
        height:'40%',
        marginHorizontal:'15%',
        justifyContent:'center',
    },
    button:{
        marginTop: 16,
        backgroundColor: '#0B2027',
        paddingVertical: 12,
        borderRadius:20,
        width: 80,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
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