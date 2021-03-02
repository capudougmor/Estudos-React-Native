
import React, { useContext } from 'react'

import { Body, Main, Objective, TextArea, Container, Hand, N1, TextInput, Button } from '../../styles'

import { NumberHandContext } from '../../contexts/NumberHandContext'


export default function NumberHand() {


  const {
    number1,
    number2,
    setNumber1,
    setNumber2,
    handleStartGame,
    reset
  } = useContext(NumberHandContext)


  return (
    <Body>
      <Main>
        <Objective>Objetivo do jogo</Objective>

        <Hand
          source={require(`../../images/mao${number1}.png`)}
          resizeMode="cover"
        />

        <TextInput placeholder={'resposta'} onChangeText={(text) => { setNumber2(text) }} />

        <Button title="Verificar" onPress={handleStartGame} />
      </Main>
    </Body>
  )
}