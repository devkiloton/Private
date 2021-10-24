import React from 'react';
import { StyleSheet,ScrollView, View, Text, TouchableOpacity} from 'react-native';

export default function Bottom({signupButtonText, navigation})
{
    return <>
    <View style={{height:'100%',}}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.helpButton}>{signupButtonText}</Text>
            </TouchableOpacity>
    </View>
    </>
}

const styles = StyleSheet.create({
    button:{
        marginTop: 16,
        backgroundColor: '#0B2027',
        padding: 16,
        borderRadius:20,
        width: 90,
        alignSelf: 'center',
        marginBottom: 25
    },
    helpButton:{
        color:'white',
        textAlign: 'center'
    }
})