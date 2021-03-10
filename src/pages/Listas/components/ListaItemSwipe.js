import React from 'react'
import styled from 'styled-components/native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const Container = styled.TouchableHighlight`
  width:100%;
  height:50px;
  background-color:#FF0000;
  justify-content:center;
  align-items: center;
`

const Icon = styled(Icons)`
 color: #00ff00;
`

export default function ListaItemSwipe(props) {
  return (
    <Container onPress={props.onDelete} underlayColor="#DDD" >
      <>
        <Icon name="menu"/>
      </>
    </Container>
  )
}
