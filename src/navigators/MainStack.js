import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const MainStack = createStackNavigator()

import Gerador from '../pages/Gerador/Index.jsx'


export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Gerador" component={Gerador} />
    </MainStack.Navigator>
  )
}