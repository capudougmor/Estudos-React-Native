import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'

const Routes = () => {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Mimimi" component={Mimimi} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes