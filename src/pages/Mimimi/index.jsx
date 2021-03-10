import React, { useState } from 'react'

import { Body, InputArea, Title, Input, Area, Image, Text1,Text2 } from './styles'


function Mimimi() {

  const [text, setText] = useState('Digite seu mimimi')
  const [text2, setText2] = useState('Digite seu mimimi')

  function changeText(text)  {
    text => setText(text)
    let newText = text.replace(/(a|e|i|o|u)/g, 'i')
    newText = newText.replace(/(á|à|ã|â)/g, 'i')
    newText = newText.replace(/(é|è|ê)/g, 'i')
    newText = newText.replace(/(í|ì|î)/g, 'i')
    newText = newText.replace(/(ó|ò|ô)/g, 'i')
    newText = newText.replace(/(ú|ù|û)/g, 'i')
    setText(text)
    setText2(newText.toUpperCase())
    setText('')
  }

  return (
    <Body>
      <Title>Criador de mimimi</Title>
      <InputArea>
        <Input 
          onChangeText={changeText}
          placeholder='Digite seu mimimi'
          placeholderTextColor="#c1bccf"
        />
      </InputArea>
      <Area>
        <Text1>{text.toUpperCase()}</Text1>
        <Image 
          source={require('../images/mimimi.jpg')}
          resizeMode="cover"
        />
        <Text2>{text2}</Text2>
      </Area>
    </Body>
  )
}

export default Mimimi