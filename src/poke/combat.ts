import { pokemon, Pokemon } from './pomekon';
import { tipo } from './pomekon';

export interface combate {
  pokemon1: pokemon;
  pokemon2: pokemon;
}

/**
 * Clase que representa un combate entre dos Pokémon.
 */
export class Combat implements combate {
  /**
   * Crea una instancia de combate entre dos Pokémon.
   * @param  pokemon1 - El primer Pokémon en combate.
   * @param  pokemon2 - El segundo Pokémon en combate.
   */
  constructor(
    public readonly pokemon1: pokemon,
    public readonly pokemon2: pokemon
  ) {}

  /**
   * Inicia el combate entre los dos Pokémon.
   * El combate continúa hasta que uno de los Pokémon se queda sin HP.
   * 
   * @returns Pokemon - El Pokémon que gana el combate.
   * 
   * Ejemplo de uso:
   * ```typescript
   * const ganador = combat.start();
   * console.log(`El ganador es: ${ganador.nombre}`);
   * ```
   */
  start(): Pokemon {
    let hp1: number = this.pokemon1.statsBasicas[3];
    let hp2: number = this.pokemon2.statsBasicas[3];
    const tipo1: tipo = this.pokemon1.tipo;
    const tipo2: tipo = this.pokemon2.tipo;

    // Cada turno
    let efectividad1: number = 1;
    let efectividad2: number = 1;

    // Calcular la efectividad del ataque según los tipos de Pokémon
    if (tipo1 === tipo.fuego && tipo2 === tipo.planta) { efectividad1 = 2; }
    if (tipo1 === tipo.fuego && tipo2 === tipo.agua) { efectividad1 = 0.5; }
    if (tipo1 === tipo.planta && tipo2 === tipo.fuego) { efectividad1 = 0.5; }
    if (tipo1 === tipo.planta && tipo2 === tipo.agua) { efectividad1 = 2; }
    if (tipo1 === tipo.agua && tipo2 === tipo.fuego) { efectividad1 = 2; }
    if (tipo1 === tipo.agua && tipo2 === tipo.electrico) { efectividad1 = 0.5; }
    if (tipo1 === tipo.agua && tipo2 === tipo.planta) { efectividad1 = 0.5; }
    if (tipo1 === tipo.electrico && tipo2 === tipo.agua) { efectividad1 = 2; }

    // Calcular la efectividad inversa
    if (efectividad1 === 2) { efectividad2 = 0.5; }
    if (efectividad1 === 0.5) { efectividad2 = 2; }

    // Ciclo del combate
    while (hp1 > 0 && hp2 > 0) {
      console.log(`${this.pokemon1.nombre} tiene ${hp1} HP`);
      console.log(`${this.pokemon2.nombre} tiene ${hp2} HP`);

      // Calcular daño de pokemon1 a pokemon2
      const daño1a2 = (this.pokemon1.statsFisicas[0] / this.pokemon2.statsFisicas[1]) * efectividad1;
      hp2 = hp2 - daño1a2;
      console.log(`${this.pokemon1.nombre} hace ${daño1a2} daño a ${this.pokemon2.nombre}`);

      // Si pokemon2 ha caído, continuar con el siguiente ciclo
      if (hp2 < 0) { continue; }

      // Calcular daño de pokemon2 a pokemon1
      const daño2a1 = (this.pokemon2.statsFisicas[0] / this.pokemon1.statsFisicas[1]) * efectividad2;
      hp1 = hp1 - daño2a1;
      console.log(`${this.pokemon2.nombre} hace ${daño2a1} daño a ${this.pokemon1.nombre}`);
    }

    // Determinar el ganador
    if (hp1 < 0) {
      console.log(`${this.pokemon2.nombre} ha ganado el combate con ${hp2} HP restante!`);
      return this.pokemon2;
    } else {
      console.log(`${this.pokemon1.nombre} ha ganado el combate con ${hp1} HP restante!`);
      return this.pokemon1;
    }
  }
}
