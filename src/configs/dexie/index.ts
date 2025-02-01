import Dexie, { Table } from "dexie"

export interface Pokemon {
  id?: number
  name: string
  type: string
}

export class LivingDexDB extends Dexie {
  pokemons!: Table<Pokemon, number>

  constructor() {
    super("LivingDexDB")
    this.version(1).stores({
      pokemons: "++id, name, type",
    })

    this.pokemons = this.table("pokemons")
  }
}

export const db = new LivingDexDB()
