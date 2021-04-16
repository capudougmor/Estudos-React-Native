import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, AppLoading } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigators/MainStack'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        style="light"
        backgroundColor="#00ff00"
        hidden={false}
        animated={true}
      />
      <MainStack />
    </NavigationContainer>
  );
}