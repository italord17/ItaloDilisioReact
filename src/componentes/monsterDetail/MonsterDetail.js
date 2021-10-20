import React, { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ItemContext } from "../context/ItemConstext";
import getMonsterById from "../utils/GetMonsterById";
import { ItemCount } from "../utils/ItemCount";
import "./MonsterData.css";

const MonsterDetail = () => {
  const { name } = useParams();
  const MonsterDetail = getMonsterById(name);
  const { setCarrito } = useContext(ItemContext);

  const addItem = (cantidad) => {
    const itemConCantidad = { ...MonsterDetail, cantidad };
    setCarrito((prev) => {
      return [...prev, itemConCantidad];
    });
  };

  let path = "/";
  if (MonsterDetail.publisher === "Pokemons") {
    path = "Pokemons";
  }

  return (
    <div className="container mt-3">
      <h1>{MonsterDetail.name}</h1>
      <div className="monster-datail-container">
        <div className="image-container">
          <img src={`/assets/pokemons/${name}.jpg`} alt={MonsterDetail.name} />
        </div>
        <div className="description-container">
          <h5>{MonsterDetail.species}</h5>
          <p>
            {" "}
            {"TIPOS:"} {MonsterDetail.types[0]}{" "}{MonsterDetail.types[1]}{" "}{MonsterDetail.types[2]}{" "}
          </p>{" "}
          <hr />
          <p>
            {" "}
            {"ALTURA:"} {MonsterDetail.height}{" "}
          </p>{" "}
          <hr />
          <p>
            {" "}
            {"PESO:"} {MonsterDetail.weight}{" "}
          </p>{" "}
          <hr />
          <p>
            {" "}
            {"EVOLUCIONES:"} {MonsterDetail.evolution[0]}{" "}
            {MonsterDetail.evolution[1]} {MonsterDetail.evolution[2]}
          </p>{" "}
          <hr />
          <p>
            {" "}
            {"ATAQUES:"} {MonsterDetail.abilities[0]}{" "}
            {MonsterDetail.abilities[1]} {MonsterDetail.abilities[2]}{" "}
          </p>{" "}
          <hr />
          <p>
            {" "}
            {"PRECIO:"} $ {MonsterDetail.price}{" "}
          </p>{" "}
        </div>
      </div>
      <div>
        <ItemCount onAdd={addItem} />
      </div>
      <Link className="btn btn-danger mt-3" to={path}>
        {" "}
        Volver{" "}
      </Link>
    </div>
  );
};

export default MonsterDetail;
