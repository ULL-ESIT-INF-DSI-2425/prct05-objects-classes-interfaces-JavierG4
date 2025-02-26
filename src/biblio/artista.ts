import { Disco } from "./dico";

export interface artista {
  nombre: string,
  oyentesMensuales: number,
  discografia: Disco[]
}

export class Artista implements artista {
  constructor(
    public readonly nombre: string,
    public readonly oyentesMensuales: number,
    public readonly discografia: Disco[]
  ) {}

}