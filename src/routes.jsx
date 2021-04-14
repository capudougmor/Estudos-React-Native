import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Mimimi from './pages/Mimimi'
import UseState from './pages/UseState'
import WaterCounter from './pages/WaterCounter/Index'
import { Adivinhe } from './pages/Adivinhe'
import Lista from './pages/Listas'
import Gerador from './pages/Gerador/Index'
import Filmes from './pages/FilmesEmCartas'
import Posts from './pages/Posts'
import LoginSimples from './pages/LoginSimples'

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="LoginSimples"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Mimimi" component={Mimimi} />
        <Screen name="UseState" component={UseState} />
        <Screen name="WaterCounter" component={WaterCounter} />
        <Screen name="Adivinhe" component={Adivinhe} />
        <Screen name="Lista" component={Lista} />
        <Screen name="Gerador" component={Gerador} />
        <Screen name="Filmes" component={Filmes} />
        <Screen name="Posts" component={Posts} />
        <Screen name="LoginSimples" component={LoginSimples} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes