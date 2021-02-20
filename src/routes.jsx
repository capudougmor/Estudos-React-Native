import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'
import UseState from './pages/UseState'
import App from './pages/Crud/App'

const Routes = () => {
  return(
    <NavigationContainer>
        <Navigator 
            initialRouteName="App"
        >
            <Screen name="Mimimi" component={UseState} />
            <Screen name="App" component={App} />
        </Navigator>
    </NavigationContainer>
  )
}

export default Routes