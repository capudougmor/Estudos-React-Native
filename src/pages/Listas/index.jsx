import React from 'react'

import { Page, Item, ItemText, Scroll } from './styles'
import lista from '../../assets/listaScrol'

export default function Lista() {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index}>
              <ItemText>{item.task} </ItemText>
            </Item>
          )
        })}
      </Scroll>
    </Page>
  )
}
