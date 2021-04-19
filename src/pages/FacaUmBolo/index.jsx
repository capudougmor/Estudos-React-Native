import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, FlatList } from 'react-native'

export default function FacaUmBolo() {

  const [name, setName] = useState()
  const [ingredients, setIngredients] = useState()

  const handleAdd = () => {
    let newIngredients = [...ingredients]
    newIngredients.push()
    setIngredients(newIngredients)
  }

  return (
    <Container>
      <Title>Faça um bolo</Title>
      <Input
        value={name}
        onChangeText={e => setName(e)}
        placeholder="Entre com um ingrediente"
        onSubmitEditing={handleAdd}
        returnKeyType ='send'
      />
      {/* <FlatList
        data={ingredients}
        renderItem={({ item, index }) => <ListIngredient />}
      /> */}
    </Container>
  )
}

const Container = styled.SafeAreaView`
  background-color: #222;
  flex: 1;
  align-items: center;
`

const Title = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
`

const Button = styled.Button`
  width: 100%;
  margin: 30px 20px 30px;
`

const ListIngredient = styled.Text`
  margin-top: 10px;
`