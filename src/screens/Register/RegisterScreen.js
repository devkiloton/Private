import React from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Top from './components/Top'
import Form from './components/Form'
import mocks from '../../mocks/Register'
const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
            <Top {...mocks.top}/>
            <Text style={styles.privacyText}>
            When you sign up, you agree with our terms.
          </Text>
            <Form {...mocks.form} navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
      privacyText:{
        color:'#999',
        textAlign: 'center',
        alignSelf:'center',
        marginVertical: 15
      }
})
export default RegisterScreen
