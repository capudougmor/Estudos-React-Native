import React, {useState} from 'react'
import styled from 'styled-components/native'

const AddItemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
`

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  color: #000;
`

export default () => {
  const [item, setItem] = useState('')

  const handleSubmit = () => {
    console.log(item);
    
  }

  return (
    <AddItemArea>
      <AddItemInput 
        value={item}
        placeholder='Digite um novo item' 
        onChangeText={e => setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType='send'
      />
    </AddItemArea>
  )
}
