import React from 'react'

import { Page, Item, ItemText, Scroll, ItemCheck, Listagem } from './styles'
import lista from '../../assets/listaScrol'
import ListItem from './components/ListaItem'
import AddItemArea from './components/AddItemArea'

export default function Lista() {
  return (
    <Page>
      {/* <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index} activeOpacity={0.4} underlayColor="transparent">
              <ItemText>{item.task} </ItemText>
              <ItemCheck></ItemCheck>
            </Item>
          )
        })}
      </Scroll> */}
      <AddItemArea />
      <Listagem 
        data={lista}
        renderItem={({item})=><ListItem data={item}/>}
        keyExtractor={item => item.nome}
      />
    </Page>
  )
}
