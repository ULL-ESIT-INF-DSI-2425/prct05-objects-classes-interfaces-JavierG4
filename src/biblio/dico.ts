import {Cancion, cancion} from "./cancion"

export interface disco {
  nombre: string,
  año: number,
  canciones: Cancion[]

}

export class Disco implements disco {
  constructor(
    public readonly nombre: string, 
    public readonly año: number, 
    public readonly canciones: Cancion[]) {}

}