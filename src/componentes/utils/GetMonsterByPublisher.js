import { monsterData } from "../../db/DataBase";

const getMonsterByPublisher = (publisher) => {
  return monsterData.filter((dataBase) => dataBase.publisher === publisher);
};

export default getMonsterByPublisher;
