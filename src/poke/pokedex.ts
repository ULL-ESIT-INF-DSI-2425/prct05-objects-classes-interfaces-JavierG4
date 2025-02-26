import { Pokemon, statsBasicas, statsFisicas, tipo } from './pomekon';

type buscarPokemon = [boolean, tipo | statsBasicas | statsFisicas | string | undefined];

/**
 * Clase que representa una Pokédex con funcionalidades de búsqueda.
 */
export class Pokedex {
  /**
   * Crea una instancia de la Pokédex.
   * @param pokedex - Lista de Pokémon disponibles en la Pokédex.
   */
  constructor (public readonly pokedex: Pokemon[]) {}

  /**
   * Busca Pokémon en la Pokédex según criterios dados.
   * 
   * @param buscarPokemon - Lista de criterios de búsqueda en el orden:
   *  1. Tipo del Pokémon.
   *  2. Estadísticas básicas.
   *  3. Estadísticas físicas.
   *  4. Nombre.
   * 
   * @returns Pokemon - Lista de Pokémon que cumplen con los criterios especificados.
   */
  buscarPokemon(seleccion: buscarPokemon[]): Pokemon[] {
    // Si no hay exactamente 4 criterios, devolvemos un array vacío.
    if (seleccion.length !== 4) {
      return [];
    }

    // Copia de la Pokédex para aplicar los filtros sin modificar la original.
    let pokedexCopia = [...this.pokedex];

    // Filtrar por tipo de Pokémon
    if (seleccion[0][0] === true) {
      pokedexCopia = pokedexCopia.filter(pokemon => pokemon.tipo === seleccion[0][1]);
    }

    // Filtrar por estadísticas básicas
    if (seleccion[1][0] === true) {
      pokedexCopia = pokedexCopia.filter(pokemon => pokemon.statsBasicas === seleccion[1][1]);
    }

    // Filtrar por estadísticas físicas
    if (seleccion[2][0] === true) {
      pokedexCopia = pokedexCopia.filter(pokemon => pokemon.statsFisicas === seleccion[2][1]);
    }

    // Filtrar por nombre del Pokémon
    if (seleccion[3][0] === true) {
      pokedexCopia = pokedexCopia.filter(pokemon => pokemon.nombre === seleccion[3][1]);
    }

    return pokedexCopia;
  }
}
