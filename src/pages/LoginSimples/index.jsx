import React, { useState } from 'react'
import styled from 'styled-components/native'



function Posts() {

  const [email, setEmail] = useState('suporte@b7web.com.br')
  const [password, setPassword] = useState('1234')
  const [status, setStatus] = useState('')
  const [showCupon, setShowCupon] = useState(true)

  const handleVerifyLogin = async () => {
    setStatus('')
    
    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
          'content-Type': 'application/json'
        }
    })
    setShowCupon(false)
    const json = await req.json()
    if(json.status == 'ok') {
      setStatus('Acesso LIBERADO')
      setShowCupon(true)
    } else {
      setStatus('acesso NEGADO')
    }
  }


  return (
    <Container>

      {/* <InputLabel>desconto</InputLabel>
      <Input 
        value={email} 
        onChangeText={e => setEmail(e)} 
        placeholder="Digite seu email" 
      />

      <Input 
        value={password} 
        onChangeText={e => setPassword(e)} 
        placeholder="Digite sua senha" 
        secureTextEntry={true}
      /> */}

      <Button onPress={handleVerifyLogin} >
        <ButtonText>Verificar</ButtonText>
      </Button>

      <InputLabel>{status}</InputLabel>
      {showCupon &&
        <CuponArea>
          <CuponTitle>Código di cupom</CuponTitle>
          <CuponText>JSDRVFSS</CuponText>
        </CuponArea>
      }
    </Container>
  )
}

export default Posts

const Container = styled.SafeAreaView`
  background-color: #444;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const InputLabel = styled.Text`
  color: #fff;  
  font-size: 22px;
  font-weight: bolder;
`

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
  margin-top: 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 8px;
`

const Button = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  margin-top:20px;
  justify-content: center;
  align-items: center;
  background-color: #ffa100;
  border-radius: 8px;
  margin-bottom: 40px;
`

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`

const CuponArea = styled.View`
  padding: 30px;
  background-color: #fff;
  align-items: center;
  border-radius: 5px;
`

const CuponTitle = styled.Text`
  color: #000;
  font-size: 18px
`

const CuponText = styled(CuponTitle)`
  font-size: 30px;
`