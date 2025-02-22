//Ejercicio 1 - Combates Pokemon

export type statsFisicas = [peso: number, altura: number]

//Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP)
export type statsBasicas = [ataque:number, defensa:number, velocidad:number, vida:number]

export enum tipo {
  fuego,
  electrico,
  agua,
  planta
}

export interface pokemon {
  nombre: string,
  statsFisicas: statsFisicas,
  statsBasicas: statsBasicas,
  tipo: tipo
}

export class Pokemon implements pokemon {
  constructor(
    public readonly nombre: string, 
    public readonly statsFisicas: statsFisicas,
    public readonly tipo: tipo, 
    public readonly statsBasicas: statsBasicas) {}
  
    
}