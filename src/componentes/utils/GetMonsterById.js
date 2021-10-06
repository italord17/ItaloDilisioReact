import { monsterData } from "../../db/DataBase"


const getMonsterById = (name) => {
    return monsterData.find(monster => (monster.name === name)) 

}

export default getMonsterById