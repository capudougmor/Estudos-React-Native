
import React from 'react'

import { Body, Main, TextArea, N1, TextInput, Button } from './styles'
import { Text } from 'react-native'
import NumberHand from './components/NumberHand'

export function Adivinhe() {

    return (
        <Body>
            <Main>
                <N1>
                    <Text>{number1} </Text>
                </N1>

                <TextArea>
                    <NumberHand />
                    <TextInput value={number2} onChangeText={(text) => { setNumber2(text) }} />
                </TextArea>

                <Button title="Verificar" onPress={handleClick} />
            </Main>

        </Body>

    )
}