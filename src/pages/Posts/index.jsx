import React from 'react'
import { Text, useState } from 'react-native'
import styled from 'styled-components/native'



export default function Posts() {
  
  const [ title, setTitle] = useState(0)
  const [ status, setStatus] = useState('Ruin')
  const [ ptc, setPtc] = useState(0)

  const atualizar = () => {
  }
  

  return (
    <Container>
      <Text>ok</Text>
      <Input value={title} />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #ccc;
`