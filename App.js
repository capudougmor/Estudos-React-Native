import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { AppLoading } from 'expo'

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar 
        style="light"
        backgroundColor="#00ff00"
        hidden={false}
        animated={true}
      />
    </>
  );
}