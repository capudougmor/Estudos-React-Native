import React, { useState } from 'react'
import { Image } from 'react-native'

import { Body, InputArea, Title, Input, Area, Text1,Text2 } from './styles'

import Menino from '../images/mimimi.jpg'

function Mimimi() {

  const [texto1, setTexto1] = useState('Texto ex1')
  const [texto2, setTexto2] = useState('Texto ex1')

  return (
    <Body>
      <Title>Exemple</Title>
      <InputArea>
        <Input 
          onChangeText={texto2 => setTexto1(texto1)}
          placeholder='Digite seu mimimi'
          placeholderTextColor="#c1bccf"
        />
      </InputArea>
      <Area>
        <Text1>{texto1.toUpperCase()}</Text1>
        <Image source={Menino} style={{ width: 300, height: 300, marginTop: -70} } />
        <Text2>{texto2.toUpperCase()}</Text2>
      </Area>
    </Body>
  )
}

export default Mimimi