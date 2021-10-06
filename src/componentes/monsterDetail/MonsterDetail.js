import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import getMonsterById from '../utils/GetMonsterById'
import ItemCount from '../utils/ItemCount';
import './MonsterData.css';

const MonsterDetail = () => {
    
    const {name} = useParams()
   
    const MonsterDetail = getMonsterById(name)

    let path = '/';
    if(MonsterDetail.publisher === "Pokemons" ){
        path = 'Pokemons'
    }

    return (
        <div className="container mt-3">
            <h1>{MonsterDetail.name}</h1>
            <div className="monster-datail-container">
                <div className="image-container">
                    <img src={`/assets/pokemons/${name}.jpg`} alt={MonsterDetail.name}/>
                </div>
                <div className="description-container">
                    <h5>
                        {MonsterDetail.species}
                    </h5>
            
                        <p> {"ALTURA:"} {MonsterDetail.types}  </p>  <hr/>
                        <p> {"ALTURA:"} {MonsterDetail.height}  </p>  <hr/>
                        
                        <p> {"PESO :"} {MonsterDetail.weight} </p> <hr/>
                        <p> {"STATS:"} {MonsterDetail.evolution} </p>  <hr/>

                        <p> {"ATAQUES:"} {MonsterDetail.abilities} </p>  <hr/>
                </div>    
                 
            </div>
            <div>
                <ItemCount initial={1} />
            </div>
            <Link  className="btn btn-danger mt -3" to={path}> Volver </Link>
        </div>
    )
}

export default MonsterDetail