import React from 'react'
import { Text, View, FlatList } from 'react-native'
import users from '../data/users'
import { ListItem, Avatar } from 'react-native-elements'

export default props => {

    function getUserItem({ item }) {
    return (
        <ListItem 
            bottomDivider
            onPress={() => props.navigation.navigate('UserForm')}
        >
            <Avatar source={{uri: item.avatarUrl}} />
            <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
