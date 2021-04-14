import React, { useState } from 'react'
import styled from 'styled-components/native'



function Posts() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('Ruin')

  const handleSend = async () => {
    if(title != '' && body != '') {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userid: 444
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const json = await req.json()
      alert(json.title)

    } else {
    }
  }


  return (
    <Container>

      <InputLabel>Titulo</InputLabel>
      <Input value={title} onChangeText={ e => setTitle(e) } />

      <InputLabel>Corpo</InputLabel>
      <Input value={body} onChangeText={ e => setBody(e)} />

      <Button >
        <ButtonText onPress={handleSend}>Enviar</ButtonText>
      </Button>
    </Container>
  )
}

export default Posts

const Container = styled.SafeAreaView`
  background-color: #444;
  flex: 1;
  align-items: center;
`

const InputLabel = styled.Text`
  color: #fff;  
  margin: 10px;
  align-self: start;
`

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
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