export interface cancion {
  nombre: string,
  duracion: number,
  genero: string,
  single: boolean,
  reproducciones: number
}

export class Cancion implements cancion {
  constructor(
    public readonly nombre: string,
    public readonly duracion: number,
    public readonly genero: string,
    public readonly single: boolean,
    public readonly reproducciones: number
  ){}


}