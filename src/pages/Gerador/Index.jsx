import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  margin-top: 60px;

  background-color: #f3f3ff;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Logo = styled.Image`
width: 50px;
`

const Text = styled.Text`
  font-size: 25px;
`

export default function Gerador() {
  return(
    <Container>
      <Text>ok</Text>
      <Logo
        source={require('./images/logo.png')}
        resizeMode="cover"
      />
    </Container>
  ) 
}
