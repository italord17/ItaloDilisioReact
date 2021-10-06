import React from 'react'
import { useState } from 'react'

export const ItemCount = ({onAdd}) => {


  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador+1)
  }
  const restar = () => {
    setContador(contador-1)
  }


  return (
    <div>
      <button className= "btn btn-danger me-3" onClick={restar}>-</button>
      <span>{contador}</span>
      <button className= "btn btn-danger ms-3" onClick={sumar}>+</button>
      <button className= "btn btn-danger ms-3" onClick={() => onAdd(contador)}>agregar al carrito</button>
    </div>
  )
}
