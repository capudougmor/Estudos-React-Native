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
          headerStyleAling: 'center',
          headerStyle: {
            backgroundColor: '#ffa200',
          },
          headerTitleStyle:{
            fontSize: 23,
            fontWeight: 'bold',
            color: '#ddd'
          }
        
        }}
      />
      <MainStack.Screen 
        name="UseState" 
        component={UseState} 
        options={({route}) => ({
          title: route.params?.password ?? 'Aqui deve vir a senha'
        })}
      />
    </MainStack.Navigator>
  )
}