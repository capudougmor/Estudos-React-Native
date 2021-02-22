import React from 'react';
import { Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

import { Container, Image, InfoArea, Area, Titulo, Dado, PctArea, PctTexto, Button } from './styles.js';



function WaterCounter() {
  
  const [ consumido, setConsumido] = useState(0)
  const [ status, setStatus] = useState('Ruin')
  const [ ptc, setPtc] = useState(0)

  const atualizar = () => {
    let newConsumido = consumido + 200 
    setConsumido(newConsumido)
    setPtc((newConsumido/2000)*100)
    
    let newPtc = ptc

    if(newPtc >= 100) {
      setStatus("Bom")
    } else {
      setStatus("Ruim")
    }
  }
  

  return (
    <Container>
      <Image source={require('../images/waterbg.png')}>
        <InfoArea>
          <Area>
            <Titulo>Meta</Titulo>
            <Dado>2000 ml</Dado>
          </Area>
          <Area>
            <Titulo>Consumido</Titulo>
            <Dado>{consumido} ml</Dado>
          </Area>
          <Area>
            <Titulo>Status</Titulo>
            <Dado>{status}</Dado>
          </Area>
        </InfoArea>

        <PctArea>
          <PctTexto>{ptc}%</PctTexto>
          <Button title={'Beber 200ml'} onPress={atualizar} />
        </PctArea>

      </Image>
    </Container>
  )
}

export default WaterCounter;