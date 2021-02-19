import React from 'react';
import { Text, View } from 'react-native'
import { useState } from 'react/cjs/react.development';

import { Button } from './styles';

function UseState() {

  const [ state, setState ] = useState(100)

  const add = () => 
    setTimeout(() => {
      setState((prevState) => prevState + 15)
    }, 2000);

  return (
    <View>
      <Button title={'Deposito: R$ 15,00'} onPress={add}/>
      <Button title={'Saque: R$ 100,00'} onPress={() => setState(state - 100) }/>
      <Text>R$ {state},00</Text>
    </View>
  )
}

export default UseState;