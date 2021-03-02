
import React, { useContext } from 'react'
import NumberHand from './components/NumberHand'

import { NumberHandProvider } from './contexts/NumberHandContext'

export function Adivinhe() {

    return (
        <NumberHandProvider>
            <NumberHand />
        </NumberHandProvider>

    )
}