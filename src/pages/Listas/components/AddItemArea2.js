import React, {useState} from 'react'
import styled from 'styled-components/native'

const AddItemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
  margin-top: 30px;
`

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  color: #000;
`

export default (props) => {
  const [item, setItem] = useState('')

  const handleSubmit = () => {
    if(item.trim() != '') {
      props.onAdd(item.trim())
      setItem('');
    }
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
 