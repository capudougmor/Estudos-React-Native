import React, {useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { Page, Item, ItemText, Scroll, ItemCheck, Listagem } from './styles'

import lista from '../../assets/listaScrol'
import ListItem from './components/ListaItem'
import ListaItemSwipe from './components/ListaItemSwipe'
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

  const toggleDone = (index) => {
    let newItems = [...items]
    newItems[index].done = !newItems[index].done
    setItems(newItems)
  }

  const deleteItem =(index) => {
    let newItems = [...items]
    newItems = newItems.filter((it, newIndex) => newIndex!=index)

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
      <SwipeListView 
        data={items}
        renderItem={({item, index})=><ListItem onPress={() => toggleDone(index)} data={item}/>}
        renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={() => deleteItem(index)} />}
        leftOpenValue={50}
        disableLeftSwipe={true}
        // rightOpenValue={-50}
      />
    </Page>
  )
}
