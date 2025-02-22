import { Pokemon, statsBasicas, statsFisicas, tipo } from './pomekon';

type buscarPokemon = [boolean, tipo | statsBasicas | statsFisicas | string | undefined]

export class Pokedex {
  constructor (public readonly pokedex: Pokemon[]) {}

  buscarPokemon(seleccion: buscarPokemon[]): Pokemon[] {
    const pokedexCopia = [...this.pokedex];
    if(seleccion.length !== 4) {
      return []
    } 
    // Comprobar tipo
    if(seleccion[0][0] === true) {
      pokedexCopia.forEach((pokemon, index) => {
        if (pokemon.tipo !== seleccion[0][1]) {
          pokedexCopia.splice(index, 1)
        }
      });
    }
    // statsbasicas
    if(seleccion[1][0] === true) {
      pokedexCopia.forEach((pokemon,index)=> {
        if (pokemon.statsBasicas !== seleccion[1][1]) {
          pokedexCopia.splice(index, 1)
        }
      })
    }
    // Fisicas
    if(seleccion[2][0] === true) {
      pokedexCopia.forEach((pokemon,index)=> {
        if (pokemon.statsFisicas !== seleccion[2][1]) {
          pokedexCopia.splice(index, 1)
        }
      })
    }
    // nombre
    if(seleccion[3][0] === true) {
      pokedexCopia.forEach((pokemon,index)=> {
        if (pokemon.nombre !== seleccion[3][1]) {
          pokedexCopia.splice(index, 1)
        }
      })
    }
    return pokedexCopia
  }
}

