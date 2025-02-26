//Ejercicio 1 - Combates Pokemon

export type statsFisicas = [peso: number, altura: number];


export type statsBasicas = [ataque: number, defensa: number, velocidad: number, vida: number];

/**
 * Enum que representa los diferentes tipos de Pokémon.
 */
export enum tipo {
  fuego,      // Tipo fuego
  electrico,  // Tipo eléctrico
  agua,       // Tipo agua
  planta      // Tipo planta
}

/**
 * Interfaz que define la estructura de un Pokémon.
 */
export interface pokemon {
  nombre: string;          // Nombre del Pokémon
  statsFisicas: statsFisicas; // Estadísticas físicas del Pokémon
  statsBasicas: statsBasicas;  // Estadísticas básicas del Pokémon
  tipo: tipo;             // Tipo del Pokémon
}

/**
 * Clase que representa un Pokémon.
 * Implementa la interfaz `pokemon`.
 */
export class Pokemon implements pokemon {
  /**
   * Crea una instancia de un Pokémon.
   * @param  nombre - El nombre del Pokémon.
   * @param  statsFisicas - Las estadísticas físicas del Pokémon.
   * @param  tipo - El tipo del Pokémon.
   * @param  statsBasicas - Las estadísticas básicas del Pokémon.
   */
  constructor(
    public readonly nombre: string, 
    public readonly statsFisicas: statsFisicas,
    public readonly tipo: tipo, 
    public readonly statsBasicas: statsBasicas
  ) {}
}
