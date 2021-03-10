import React from 'react'

import { Item, ItemText, ItemCheck } from '../styles'

export default ({data, onPress}) => {
  return (
    <Item onPress={onPress} underlayColor='#ccc' activeOpacity={1}>
      <>
        <ItemText>{data.task} </ItemText>
        <ItemCheck done={data.done} ></ItemCheck>
      </>
    </Item>
  )
}
