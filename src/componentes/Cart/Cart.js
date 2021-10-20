import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../context/ItemConstext";

export const Cart = () => {
  const { carrito } = useContext(ItemContext);
  const totalPrice = []

  console.log(carrito);
  let path = "/";

  return (
    <div>
      <h1>MonsterCar</h1>
      <ul>
        {carrito.map((item) => {

          const total = item.price * item.cantidad
          totalPrice.push(total)
         
          return(
            <li key="name">
              {item.name} <br/>
              Cantidad: {item.cantidad} <br/>
              Precio por Unidad: $ {item.price}<br/>
              total: $ {total}
           </li>)        
        })}

        <h3> TOTAL: $ {totalPrice.reduce((prev, next) => prev + next)} </h3>
      </ul>
      <Link className="btn btn-danger mt-3" to={path}>
        {" "}
        Volver{" "}
      </Link>
    </div>
  );
};
