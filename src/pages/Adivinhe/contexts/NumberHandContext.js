import React, { createContext, useEffect, useState } from "react";

export const NumberHandContext = createContext()

export function NumberHandProvider({children}) {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const handleStartGame = () => {
    if (number1 == number2) {
      alert('Você acertou o numero!')
      reset()
      setNumber1(Math.floor(Math.random() * 5))
    } else {
      alert('Você errou!')
    }
  }

  const reset = () => {
    setNumber2(0)
  }

  useEffect(() => {
    setNumber1(Math.floor(Math.random() * 5))
  }, [])


  return (
    <NumberHandContext.Provider
      value={{
        number1,
        number2,
        setNumber1,
        setNumber2,
        handleStartGame,
        reset
      }}
    >
      {children}
    </NumberHandContext.Provider>
  )
}