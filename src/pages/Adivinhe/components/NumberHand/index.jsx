

import React, { useEffect, useState } from 'react'
import { Container, Objective, Hand } from './styles'

export default function NumberHand() {

  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState(0)

  const handleStartGame = () => {
    if (number1 == number2) {
      alert('Você acertou o numero!')
      reset()
      setNumber1(Math.floor(Math.random() * 5))
    } else {
      alert('Você errou!')
    }
  }

  const reset = () => {
    setNumber2(0)
  }

  useEffect(() => {
    setNumber1(Math.floor(Math.random() * 5))
  }, [])

  return (
    <Container>
      <Objective>Objetivo do jogo</Objective>

      <Hand
        source={require('../../../images/mao0.png')}
        resizeMode="cover"
      />

    </Container>
  )
}