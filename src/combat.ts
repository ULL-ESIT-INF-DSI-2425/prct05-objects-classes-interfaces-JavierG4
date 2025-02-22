import { pokemon, Pokemon, statsBasicas, statsFisicas } from './pomekon';
import { tipo } from './pomekon';

export interface combate {
  pokemon1: pokemon,
  pokemon2: pokemon
}

export class Combat implements combate {
  constructor(
    public readonly pokemon1: pokemon,
    public readonly pokemon2: pokemon
  ) {}

  start() {
    let hp1: number = this.pokemon1.statsBasicas[3]
    let hp2: number = this.pokemon2.statsBasicas[3]
    const tipo1 : tipo = this.pokemon1.tipo
    const tipo2 : tipo = this.pokemon2.tipo
    // Cada tuerno
    let efectividad1: number = 1
    let efectividad2: number = 1
    if(tipo1 === tipo.fuego && tipo2 === tipo.planta){efectividad1 = 2}
    if(tipo1 === tipo.fuego && tipo2 === tipo.agua){efectividad1 = 2}

    if(tipo1 === tipo.planta && tipo2 === tipo.fuego){efectividad1 = 0.5}
    if(tipo1 === tipo.planta && tipo2 === tipo.agua) {efectividad1 = 2}

    if(tipo1 === tipo.agua && tipo2 === tipo.fuego) {efectividad1 = 0.5}
    if(tipo1 === tipo.agua && tipo2 === tipo.electrico){efectividad1 = 0.5}
    if(tipo1 === tipo.agua && tipo2 === tipo.planta){efectividad1 = 0.5}

    if(tipo1 === tipo.electrico && tipo2 === tipo.agua) {efectividad1 = 2}
    if(efectividad1 === 2) {efectividad2 = 0.5}
    if(efectividad1 === 0.5) {efectividad2 = 2}
    while (hp1 > 0 && hp2 > 0) {
      console.log(`${this.pokemon1.nombre} tiene ${hp1}`)
      console.log(`${this.pokemon2.nombre} tiene ${hp2}`)

      const daño1a2 = (this.pokemon1.statsFisicas[0] / this.pokemon2.statsFisicas[1]) * efectividad1
      hp2 = hp2 - daño1a2
      console.log(`${this.pokemon1.nombre} hace ${daño1a2} a ${this.pokemon2.nombre}`)
      if (hp2 < 0) {return 0}
      const daño2a1 = (this.pokemon2.statsFisicas[0] / this.pokemon1.statsFisicas[1]) * efectividad2
      console.log(`${this.pokemon2.nombre} hace ${daño2a1} a ${this.pokemon1.nombre}`)
      hp1 = hp1 - daño2a1
    }
    if( hp1 < 0) {
      console.log(`${this.pokemon2.nombre} ha ganado el combate con ${hp2} !`)
    } else {
      console.log(`${this.pokemon1.nombre} ha ganado el combate con ${hp1}!`)
    }
  }
}

const statsFisicasPikachu: statsFisicas = [5, 0.4]
const statsBasicasPika: statsBasicas = [55,40,50,35]
const pikachu : Pokemon = new Pokemon("pikachu",statsFisicasPikachu, tipo.electrico,statsBasicasPika)

const statsFisicasCharmander: statsFisicas = [8, 0.5]
const statsbasicasCharmander: statsBasicas = [52,43,60, 39]
const charmander: Pokemon = new Pokemon("Charmander", statsFisicasCharmander, tipo.fuego, statsbasicasCharmander)

const combate : Combat = new Combat(pikachu,charmander)
combate.start()