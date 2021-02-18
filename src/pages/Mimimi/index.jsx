import React from 'react'
import { Image } from 'react-native'

import { Body, InputArea, Title, Input, Area, Text1,Text2 } from './styles'

import Menino from '../images/mimimi.jpg'

function Mimimi() {
  return (
    <Body>
      <Title>Exemple</Title>
      <InputArea>
        <Input placeholder="Digite seu mimimi"></Input>
      </InputArea>
      <Area>
        <Text1>Texto 1</Text1>
        <Image source={Menino} style={{ width: 300, height: 300, marginTop: -70} } />
        <Text2>Texto 2</Text2>
      </Area>
    </Body>
  )
}

export default Mimimi