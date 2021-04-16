import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const MainStack = createStackNavigator()

import Gerador from '../pages/Gerador/Index.jsx'
import UseState from '../pages/UseState'


export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen 
        name="Gerador" 
        component={Gerador} 
        options={{
          title: "Gerador de senha",
          headerStyle: {
            backgroundColor: '#ffa200',
          },
          headerTitleStyle:{
            fontSize: 23,
            fontWeight: "bold",
            color: "#ddd"
          }
        
        }}
      />
      <MainStack.Screen name="UseState" component={UseState} />
    </MainStack.Navigator>
  )
}