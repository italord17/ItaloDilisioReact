
import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {
     const [contador, setContador] = useState (initial)

     return(
       <>
        <p>Contador :{contador}</p>
        <button onClick={() => {setContador(contador+1)}} > agregar</button>
        <button onClick={() => {setContador(contador-1)}} > restar</button>
        <button onClick={() => {console.log("Confirmado")}} > confirmar</button>
       </>
     )

}


export default ItemCount;
