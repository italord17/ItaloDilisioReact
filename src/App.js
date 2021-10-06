import { useState } from "react/cjs/react.development";
import { ItemContext } from "./componentes/context/ItemConstext";
import AppRoutes from "./componentes/routes/AppRoutes";


function App() {

  const [carrito, setCarrito] = useState([]) 

  return (
    <>
      <ItemContext.Provider value={{carrito, setCarrito}} >
        <AppRoutes />
      </ItemContext.Provider>  
    </>
  )
  
  
}

export default App;
