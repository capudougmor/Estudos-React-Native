import styled from 'styled-components/native'

export const Page = styled.SafeAreaView`
  flex: 1;
`

export const Scroll = styled.ScrollView`
  width: 200px;
  max-height: 200px; 
  background-color: red;
  `

export const Listagem = styled.FlatList`
  width: 200px;
  max-height: 200px; 
  background-color: red;
  `

export const Item = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
`

export const ItemCheck = styled.View`
  padding: 5px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  border: 5px solid #f2f3f5;
  `
  
  export const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`

