import Dexie, { Table } from "dexie";

export class Database extends Dexie {
  // constructor() {
  //   // super()
  // }
}

console.log('import.meta.env -> ', import.meta.env)
console.log('import.meta.env.DB_NAME -> ', import.meta.env.DB_NAME)
