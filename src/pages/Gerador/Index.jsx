import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import Slider from '@react-native-community/slider'
import Clipboard from 'expo-clipboard'
import Button2 from "./Button.js";

import { useNavigation } from '@react-navigation/native'

let charset = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'

export default function Gerador() {

  const [password, setPassword] = useState()
  const [size, setSize] = useState(5)
  const [colorButon, setColorButon] = useState()
  const [color, setColor] = useState()
  const navigation = useNavigation()

  function generatePass() {
    let pass = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass)
  }
  
  function copyPass() {
    Clipboard.setString(password)
    alert('Senha copiada com sucesso!')
  }

  function handleGoUseState() {
    navigation.navigate('UseState', {password})
  }

  function handleUseRed(n) {
    setColor(n).then(()=>{
      navigation.navigate('UseState', {password, color})
    })
  }


  return (
    <Container>
      <Logo
        source={require('./images/logo.png')}
        resizeMode="cover"
      />
      <Title>{Math.floor(size)} Caracteres{color} </Title>
      <TextArea>
        <Slider
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </TextArea>
      <Button2 onPress={generatePass} colorButon='#00eeff'>
        <ButtonText>Gerar senha</ButtonText>
      </Button2>
      {password && (
        <TextArea >
          <Password onLongPress={copyPass} >{password}</Password>
        </TextArea>
      )}

      <Button2 click={handleUseRed} colorButon='#ff2600'>
        <ButtonText>Escolher esta cor</ButtonText>
      </Button2>
      <Button2 onPress={() => setColor('#ffa200')} colorButon='#ffa200'>
        <ButtonText>Escolher esta cor</ButtonText>
      </Button2>
      <Button2 onPress={() => setColor('#51ff00')} colorButon='#51ff00'>
        <ButtonText>Escolher esta cor</ButtonText>
      </Button2>
    </Container>
  )
}

const Container = styled.View`
  background-color: #f3f3ff;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Logo = styled.Image`
  margin-bottom: 50px;
`

const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
`

const TextArea = styled.View`
  width: 90%;
  margin: 15px 0;
  padding: 15px 0;
  background-color: #fff;
  border-radius: 8px;
`

const ButtonText = styled(Title)`
  font-size: 20px;
  color: #fff;
`

const Password = styled(ButtonText)`
  color: #000;
  align-self: center;
`
