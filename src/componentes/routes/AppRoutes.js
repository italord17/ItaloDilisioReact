import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Cart } from '../Cart/Cart';
import { Digimones } from '../digimones/digimones';
import MonsterDetail from '../monsterDetail/MonsterDetail';
import NavBar from '../navBar/navBar';
import { Pokemones } from '../pokemones/pokemones';

const AppRoutes = () => {
    return (
        <div>
            <Router>
            <NavBar/>
                <Switch>
                    <Route path="/" exact component={Pokemones}/>
                    <Route path="/Cart" component={Cart} />
                    <Route path="/Pokemones" exact component={Pokemones}/>
                    <Route path="/Digimones" exact component={Digimones}/>
                    <Route path="/monster/:name" exact component={MonsterDetail}/>
                </Switch>
            </Router>
            
        </div>
    )
}

export default AppRoutes