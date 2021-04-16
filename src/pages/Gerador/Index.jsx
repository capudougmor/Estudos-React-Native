import React, { useState } from 'react'
import styled from 'styled-components/native'

import Slider from '@react-native-community/slider'
import Clipboard from 'expo-clipboard'

import { useNavigation } from '@react-navigation/native'



let charset = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'

export default function Gerador() {

  const [password, setPassword] = useState()
  const [size, setSize] = useState(5)

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

  return (
    <Container>
      <Logo
        source={require('./images/logo.png')}
        resizeMode="cover"
      />
      <Title>{Math.floor(size)} Caracteres</Title>
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
      <Button onPress={generatePass}>
        <ButtonText>Gerar senha</ButtonText>
      </Button>
      {password && (
        <TextArea >
          <Password onLongPress={copyPass} >{password}</Password>
        </TextArea>
      )}

      <Button onPress={handleGoUseState}>
        <ButtonText>Ir para tela UseState</ButtonText>
      </Button>
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

const Button = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #ffa200;
  border-radius: 8px;
  margin-bottom: 40px;
`

const ButtonText = styled(Title)`
  font-size: 20px;
  color: #fff;
`

const Password = styled(ButtonText)`
  color: #000;
  align-self: center;
`
