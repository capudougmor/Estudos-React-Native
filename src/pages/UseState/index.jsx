import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Button } from './styles';

import { useRoute } from '@react-navigation/native'

const Desejo = ({senha}) => {
    
    return (
        <Text>{senha}</Text>
    )
}

function Usestate() {
    const [ state, setState ] = useState(100)

    const route = useRoute()
    
    const senha = route.params.password
    
    const add = () => {
        setTimeout(() => {
            setState((prevState) => prevState + 15)
        }, 2000);
    }
    
    return (
        <View>
            <Button title={'Deposito: R$ 15,00'} onPress={add}/>
            <Button title={'Saque: R$ 100,00'} onPress={() => setState(state - 100) }/>
            <Text>R$ {state},00</Text>
            <Text>Hoje voce vai comer</Text>
            <Desejo senha={senha}/>
        </View>
  )
}

export default Usestate;