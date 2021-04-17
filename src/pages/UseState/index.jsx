import React, { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from './styles';
import Button2 from '../Gerador/Button'

import { useRoute, useNavigation } from '@react-navigation/native'

const Desejo = ({ senha }) => {

  return (
    <Text>{senha}</Text>
  )
}

function Usestate() {
  const [state, setState] = useState(100)
  const [count, setCount] = useState(0)

  const navigation = useNavigation()
  const route = useRoute()
  const senha = route.params.password

  const add = () => {
    setTimeout(() => {
      setState((prevState) => prevState + 15)
    }, 2000);
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: count,
    })
  }, [count])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: count,
      headerRight: () => <Button title='+1' onPress={handleHeaderPlus} />
    })
  }, [])
  
  const handleHeaderPlus = () => {
    setCount(c => c + 1)
  }

  return (
    <View>
      <Button title={'Deposito: R$ 15,00'} onPress={add} />
      <Button title={'Saque: R$ 100,00'} onPress={() => setState(state - 100)} />
      <Text>R$ {state},00</Text>
      <Text>Hoje voce vai comer</Text>
      <Desejo senha={senha} />
    </View>
  )
}

export default Usestate;