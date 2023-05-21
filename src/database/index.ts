import Dexie from "dexie";

export class Database extends Dexie {
  // constructor() {
  //   // super()
  // }
}

const db = import.meta.env.DB_NAME
const viteDb = import.meta.env.VITE_DB_NAME
console.log('import.meta.env.DB_NAME -> ', db)
console.log('import.meta.env.VITE_DB_NAME -> ', viteDb)
