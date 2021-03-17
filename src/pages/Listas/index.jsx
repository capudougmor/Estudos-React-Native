import React, {useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import styled from 'styled-components/native'

import lista from './assets/listaScrol'
import ListItem from './components/ListaItem'
import ListaItemSwipe from './components/ListaItemSwipe'
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
      <AddItemArea2 onAdd={addNewItem} />
      <SwipeListView 
        data={items}
        renderItem={({item, index})=><ListItem onPress={() => toggleDone(index)} data={item}/>}
        renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={() => deleteItem(index)} />}
        leftOpenValue={50}
        keyExtractor={items.index}
        disableLeftSwipe={true}
        // rightOpenValue={-50}
      />
    </Page>
  )
}

const Page = styled.SafeAreaView`
  flex: 1;
`
