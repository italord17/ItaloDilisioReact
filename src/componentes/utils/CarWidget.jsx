import React from "react";
import { NavLink } from "react-router-dom";

export const CarWidget = () => {
  return (
    <NavLink
      className="nav-link"
      activeClassName="active"
      aria-current="page"
      to="/Cart"
    >
      MONSTERCAR
    </NavLink>
  );
};
