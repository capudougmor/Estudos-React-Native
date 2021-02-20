import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'
import UseState from './pages/UseState';
import UserList from './pages/Crud/Views/UserList'
import UserForm from './pages/Crud/Views/UserForm'

const Routes = () => {
  return(
    <NavigationContainer>
        <Navigator 
            initialRouteName="UserList"
            screenOptions={{ headerShown: false }}
        >
            <Screen name="Mimimi" component={UseState} />
            <Screen name="UserList" component={UserList} />
            <Screen name="UserForm" component={UserForm} />
        </Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
    headerStyle: {
        
    }
}

export default Routes