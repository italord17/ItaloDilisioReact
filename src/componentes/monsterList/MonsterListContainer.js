import React from "react";
import { Card } from "../card/Card";
import getMonsterByPublisher from "../utils/GetMonsterByPublisher";
import "./monsterListContainer.css";

export const MonsterListContainer = ({ publisher }) => {
  const monster = getMonsterByPublisher(publisher);

  return (
    <div className="monster-container">
      {monster.map((monster) => (
        <Card
          key={monster.id}
          id={monster.id}
          name={monster.name}
          species={monster.species}
        />
      ))}
    </div>
  );
};
