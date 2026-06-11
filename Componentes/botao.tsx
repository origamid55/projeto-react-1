import React from 'react'

const botao = ({children, onClick}) => {
  return (
     <button onClick={onClick}> {children} </button>
  )
}

export default botao