import React from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Top from './components/Top'
import Form from './components/Form'
import mocks from '../../mocks/Register'
const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
            <KeyboardAvoidingView>
            <Top {...mocks.top}/>
            <Form {...mocks.form} navigation={navigation}/>
            </KeyboardAvoidingView>
            <View style={styles.privacyView}>
          <Text style={styles.privacyText}>
            When you sign up, you agree with our terms.
          </Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    privacyView:{
        width:'50%',
        marginHorizontal:'25%',
        marginTop: 40
      },
      privacyText:{
        color:'#999',
        textAlign: 'center',
      }
})
export default RegisterScreen
