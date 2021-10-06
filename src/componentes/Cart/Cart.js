import React, { useContext } from "react";
import { ItemContext } from "../context/ItemConstext";

export const Cart = () => {
  const { carrito } = useContext(ItemContext);

  console.log(carrito);

  return (
    <div>
      <h1>carrito</h1>
      <il>
        {carrito.map((item) => (
        
          <li>
            {item.name}" "{item.publisher} {item.cantidad}
          </li>
          
        ))}
      </il>
    </div>
  );
};
