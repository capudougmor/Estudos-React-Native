import styled from 'styled-components/native'

export const Page = styled.SafeAreaView`
  flex: 1;
`

export const Scroll = styled.ScrollView`
  width: 200px;
  max-height: 200px; 
  background-color: #eee;
  `

export const Listagem = styled.FlatList`
  width: 300px;
  max-height: 300px; 
  background-color: #eee;
  `

export const Item = styled.TouchableHighlight`
  padding: 0 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`

export const ItemCheck = styled.View`
  padding: 5px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  border: 5px solid #ccc;
  background-color: ${props=>props.done ? '#01FF70' : 'transparent'}
  `
  
  export const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`

