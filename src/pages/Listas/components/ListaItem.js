import React from 'react'

import { Item, ItemText, ItemCheck } from '../styles'

export default (props) => {
  return (
    <Item onPress={() => {}} activeOpacity={0.8}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck></ItemCheck>
      </>
    </Item>
  )
}
