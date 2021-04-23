import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, FlatList } from 'react-native'

export default function CalcGorgeta() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState(0)

  const calc = () => {
    let numericBill = parseFloat(bill)
    if (numericBill) {
      setTip(numericBill * 0.10)
    } else {
      alert("Digite o valor da conta!")
    }
  }

  return (
    <Container>
      <HeaderText>Calculadora de gorgetas</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        keyboardType="numeric"
        value={bill}
        onChangeText={e => setBill(e)}
      />

      <CalcButton>
        <TextButton onPress={calc}>Calcular</TextButton>
      </CalcButton>

      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)} </ResultItem>

          <ResultItemTitle>Valor da gorgeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} </ResultItem>

          <ResultItemTitle>Valor da total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)} </ResultItem>
        </ResultArea>
      }

    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #eee;
`

const HeaderText = styled.Text`
  margin: 20px;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  color: #111;
  text-transform: uppercase;
`


const Input = styled.TextInput`
  width: 90%;
  margin-top: 20px;
  font-size: 25px;
  padding: 10px;
  background-color: #ddd;
  outline-style:  none;
  border-radius: 5px;
`

const CalcButton = styled.TouchableHighlight`
  width: 80%;
  margin-top: 20px;
  background-color: #0089fa;
  border-radius: 5px;
`

const TextButton = styled.Text`
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  color: #fff;
  align-self: center;
`

const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`

const ResultItemTitle = styled.Text`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  color: #222;
  align-self: center;
`

const ResultItem = styled.Text`
  margin: 10px;
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
  color: #333;
  align-self: center;
`