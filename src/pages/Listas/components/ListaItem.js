import React from 'react'

import { Item, ItemText, ItemCheck } from '../styles'

export default ({data, onPress}) => {
  return (
    <Item onPress={onPress} activeOpacity={0.8}>
      <>
        <ItemText>{data.task} - {data.done.toString()} </ItemText>
        <ItemCheck done={data.done} ></ItemCheck>
      </>
    </Item>
  )
}
