
import React, { useState, useEffect } from 'react'

import { Body, Main, TextArea, N1, TextInput, Button } from './styles'
import { Text } from 'react-native'

export function Adivinhe() {
    const [ number1, setNumber1] = useState()
    const [ number2, setNumber2] = useState(0)

    const handleClick = () => {
        if(number1 == number2) {
            alert('Você acertou o numero!')
            reset()
            setNumber1(Math.floor(Math.random() * 100))   
        } else {
            alert('Você errou!')
        }
    }

    const reset = () => {
        setNumber2(0)        
    }

    useEffect(() => {
            setNumber1(Math.floor(Math.random() * 100))       
    }, [])

    return (
        <Body>
            <Main>
                <TextArea>
                    <N1>
                        <Text>{number1} </Text>
                    </N1>
                    <TextInput value={number2} onChangeText={(text) => {setNumber2(text)}} />
                </TextArea>
                <Button title="Verificar" onPress={handleClick} />
            </Main>                
        </Body>
            
    )
}