import React, { useState, Children } from 'react'
import styled from 'styled-components/native'
import { Modal } from 'react-native'

export default (props) => {

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent={true}
    >
      <ModalArea>
        <Box>
          <Button>
            <ButtonText onPress={() => props.visibleAction(false)}>x</ButtonText>
          </Button>
        </Box>
      </ModalArea>
        
    </Modal>
  )
}

const ModalArea = styled.View`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`

const Box = styled.View`
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: #fff000;
  border-radius: 8px;
  `
  
  const Button = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  border-radius: 15px;
`

const ButtonText = styled.Text`
`
