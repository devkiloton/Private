import React from 'react'
import { View, Text } from 'react-native'
import Top from './components/Top'
import Form from './components/Form'
import mocks from '../../mocks/Register'
const RegisterScreen = ({navigation}) => {
    return (
        <View>
            <Top {...mocks.top}/>
            <Form {...mocks.form}/>
        </View>
    )
}

export default RegisterScreen
