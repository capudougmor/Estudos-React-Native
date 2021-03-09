import React, {useState} from 'react'

import { Page, Item, ItemText, Scroll, ItemCheck, Listagem } from './styles'
import lista from '../../assets/listaScrol'
import ListItem from './components/ListaItem'
import AddItemArea from './components/AddItemArea'
import AddItemArea2 from './components/AddItemArea2'

export default function Lista() {
  const [items, setItems] = useState(lista)

  const addNewItem = (txt) => {
    let newItems = [...items]
    newItems.push({
      task: txt,
      done: false
    })
    setItems(newItems)
  }

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
      {/* <AddItemArea items={items} setItems={setItems} /> */}
      <AddItemArea2 onAdd={addNewItem} />
      <Listagem 
        data={items}
        renderItem={({item})=><ListItem data={item}/>}
        keyExtractor={item => item.nome}
      />
    </Page>
  )
}
