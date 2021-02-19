import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'
import UseState from './pages/UseState';

const Routes = () => {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Mimimi" component={UseState} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes