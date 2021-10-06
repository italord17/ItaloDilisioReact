import React from 'react'
import { NavLink } from 'react-router-dom'
import { CarWidget } from '../utils/CarWidget'

const NavBar = () => {
    return (
        <div>
            <ul className="nav navbar-dark bg-dark">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">
                        POKETAMERS
                    </NavLink>
                </li>            
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/Pokemones">
                        POKEMONS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/Digimones">
                        DIGIMONS
                    </NavLink>
                </li>
                <li>
                    <CarWidget/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar