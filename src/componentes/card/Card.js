import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, species, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`/assets/pokemons/${name}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species}</p>
        <Link to={`/monster/${name}`} className="btn btn-danger">
          Ver Monster
        </Link>
      </div>
    </div>
  );
};
