import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'
import UseState from './pages/UseState'
import App from './pages/Crud/App'
import WaterCounter from './pages/WaterCounter/Index'
import { Adivinhe } from './pages/Adivinhe'

const Routes = () => {
  return(
    <NavigationContainer>
        <Navigator 
            initialRouteName="Adivinhe"
            screenOptions={{headerShown: false}}
        >
            <Screen name="Mimimi" component={Mimimi} />
            <Screen name="App" component={App} />
            <Screen name="UseState" component={UseState} />
            <Screen name="WaterCounter" component={WaterCounter} />
            <Screen name="Adivinhe" component={Adivinhe} />
        </Navigator>
    </NavigationContainer>
  )
}

export default Routes