import React from 'react'
import styled from 'styled-components/native'

function Button2(props) {
  return (
    <ButtonColored
      colorButon={props.colorButon}
      onPress={e => props.click(props.colorButon)}
    >
      {props.children}
    </ButtonColored>
  )
}

export default Button2

const Container = styled.View`

`

const ButtonColored = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colorButon};
  border-radius: 8px;
  margin-bottom: 20px;
`