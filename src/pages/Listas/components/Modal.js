import React, { useState, Children } from 'react'
import styled from 'styled-components/native'
import { Modal } from 'react-native'

export default (props) => {

  return (
    <Modal
      visible={props.modalVisible}
      animationType="slide"
      transparent={props.modalVisible}
    >
      <Box>
        
      </Box>
    </Modal>
  )
}

const Box = styled.View`
  width: 200px;
  height: 200px;
  background-color: #ff0000;
`
