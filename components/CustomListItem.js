import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem containerStyle={styles.bgList}>
            <Avatar 
            rounded
            source={{
                uri:
                `https://img.icons8.com/windows/32/${getRndInteger(100,999)}${getRndInteger(100,999)}/minecraft-anonymous.png`
            }}
            containerStyle={styles.avatar}
            />
            <ListItem.Content>
                <ListItem.Title style={styles.listItemTitle}>
                    Marcão do rodo
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail' style={styles.listItemSubTitle}>
                    Are ya winning son? Are ya winning son? Are ya winning son?
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        
    )
}

const styles = StyleSheet.create({
    bgList:{
        backgroundColor: '#0B2027',
        borderRadius: 20,
        marginHorizontal: 10,
        height: 80,
        marginVertical: 3,
        alignItems: 'flex-start'
    },
    avatar:{
        backgroundColor:'#fff',
        width: 48,
        height: 48,
        borderRadius: 15,
    },
    listItemTitle:{
        color: '#FFF',
        fontSize: 19,
        fontFamily: 'MontserratBold'
    },
    listItemSubTitle:{
        color: '#CCC',
        fontSize: 15
    }
})

export default CustomListItem
