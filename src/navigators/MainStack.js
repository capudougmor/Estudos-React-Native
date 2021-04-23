import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const MainStack = createStackNavigator()

import Gerador from '../pages/Gerador/Index.jsx'
import UseState from '../pages/UseState'
import FacaUmBolo from '../pages/FacaUmBolo'
import CalcGorgeta from '../pages/CalcGorgeta'
import Button from '../pages/Gerador/Button.js'


export default () => {
  return (
    <MainStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#333333',
        height: 80
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 24
      },
      headerBackTitleVisible: false,
      headerBackTitle: 'Anterior'
    }}>

      <MainStack.Screen
        name="CalcGorgeta"
        component={CalcGorgeta}
        options={{
          title: "Gorgetas",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: '#333',
            height: 50
          },
          headerTitleStyle: {
            fontSize: 16,
            color: '#fff'
          }
        }
        }
      />

      <MainStack.Screen
        name="FacaUmBolo"
        component={FacaUmBolo}
        options={{
          title: "Exercicio",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: '#ccc',
            height: 50
          },
          headerTitleStyle: {
            fontSize: 16,
            color: '#000'
          }
        }
        }
      />

      <MainStack.Screen
        name="Gerador"
        component={Gerador}
        options={{
          title: "Gerador de senha",
          headerTitleAling: 'center',
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'bold',
            color: '#fff'
          }
        }}
      />

      <MainStack.Screen
        name="UseState"
        component={UseState}
        options={({ route }) => ({
          title: route.params?.password ?? 'Aqui deve vir a senha',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: route.params?.color,
          },
          headerRight: () => <Button click={() => alert('oi')}>ok</Button>
        })}
      />
    </MainStack.Navigator>
  )
}