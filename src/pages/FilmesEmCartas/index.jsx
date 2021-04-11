import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default () => {

  const handleLoadButton = async () => {
    const req = await fetch("http://api.b7web.com.br/cinema/")
    const json = await req.json()
    alert(json.length)
  }
  return (
    <SafeAreaView>
      <Button title="Carregar Filmes" onPress={handleLoadButton} />
    </SafeAreaView>
  )
}