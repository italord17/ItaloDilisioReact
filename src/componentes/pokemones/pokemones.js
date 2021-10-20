import React from "react";
import { MonsterListContainer } from "../monsterList/MonsterListContainer";

export const Pokemones = () => {
  return (
    <div className="contanier mt-3">
      <h1>POKEMONES</h1>
      <hr></hr>
      <MonsterListContainer publisher="Pokemones" />
    </div>
  );
};
