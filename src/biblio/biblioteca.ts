import { Artista } from "./artista";
import { Cancion } from "./cancion";
import { Disco } from "./dico";

export interface biblioteca {
  artistas: Artista[],
  buscarArtista(nombre: string): Artista[];
  buscarDisco(nombre: string): Disco[];
  buscarCancion(nombre: string): Cancion[];
  duracionDisco(nombre: string): number | undefined;
  numeroReproduccionesDisco(nombre: string): number | undefined;
  numeroCancionesDisco(nombre: string): number | undefined;
}


export class Biblioteca implements biblioteca {
  constructor(public readonly artistas:Artista[]){}

  //Buscar artistas
  buscarArtista(nombre: string): Artista[]{
    const resultado: Artista[] = [];
    this.artistas.forEach(artista => {
      if (artista.nombre === nombre) {
        resultado.push(artista);
      }
    });
    if (resultado.length > 0) {
      const tabla = resultado.map(artista => {
        return {
          'Nombre del Artista': artista.nombre,
          'Oyentes': artista.oyentesMensuales,
          'Discos': artista.discografia.map(disco => disco.nombre).join(', '),
          'Canciones': artista.discografia.map(disco => disco.canciones.map(cancion => cancion.nombre).join(', ')).join(', ')
        };
      });
      console.table(tabla);
    }
    return resultado;
  }

  //Buscar Disco
  buscarDisco(nombre:string): Disco[] {
    const resultado: Disco[] = []
    this.artistas.forEach(artista => {
      artista.discografia.forEach(disco => {
        if(disco.nombre === nombre) {
          resultado.push(disco)
        }
      });
    })
    if(resultado.length > 0) {
      const tabla = resultado.map( disco => {
        return {
          'Nombre': disco.nombre,
          'Año del disco': disco.año,
          'Canciones': disco.canciones.map(cancion => cancion.nombre).join(", ")
        }
      })
      console.table(tabla)
    }
    return resultado
  }

  //Buscar cancion
  buscarCancion(nombre:string): Cancion[] {
    const resultado: Cancion[] = []
    this.artistas.forEach(artista=> {
      artista.discografia.forEach(disco=> 
        disco.canciones.forEach(cancion => {
          if(cancion.nombre === nombre) {
            resultado.push(cancion)
          }
        })
      )
    })
    if(resultado.length > 0 ) {
      const tabla = resultado.map(cancion => {
        return {
          nombre: cancion.nombre,
          duracion: cancion.duracion,
          genero: cancion.genero,
          single: cancion.single,
          reproducciones: cancion.reproducciones
        }
      })
      console.table(tabla)
    }
    return resultado
  }

  // Mostrar biblioteca
  

  // Duracion de un disco
  duracionDisco(nombre:string): number {
    let numero = 0
    this.artistas.forEach(elemento => {
      elemento.discografia.forEach(elemento_disco => {
        if(elemento_disco.nombre === nombre) {
          elemento_disco.canciones.forEach(cancion => {
            numero += cancion.duracion
          })
        }
      })
    })
    if(numero === 0){return undefined}
    return numero
  }

  //Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.
  numeroReproduccionesDisco(nombre:string): number | undefined {
    let numero = 0
    this.artistas.forEach(elemento => {
      elemento.discografia.forEach(elemento_disco => {
        if(elemento_disco.nombre === nombre) {
          elemento_disco.canciones.forEach(cancion => {
            numero += cancion.reproducciones
          })
        }
      })
    })
    if(numero === 0){return undefined}
    return numero
  }

  // Num canciones de un disco en concreto
  numeroCancionesDisco(nombre: string): number | undefined {
    let numero: number = 0
    this.artistas.forEach(elemento => {
      elemento.discografia.forEach(elemento_disco => {
        if(elemento_disco.nombre === nombre) {
          numero = elemento_disco.canciones.length
        }
      })
    })
    if(numero === 0){return undefined}
    return numero
  }
}

// Test the buscarArtista function
const artista1 = new Artista("Artista1", 1000, [new Disco("Disco1", 2020, [new Cancion("Cancion1", 3, "Pop", true, 100),new Cancion("Cancion2", 4, "Rock", false, 200)]),new Disco("Disco2", 2021, [new Cancion("Cancion2", 4, "Rock", false, 200)])]);
const artista2 = new Artista("Artista2", 2000, [new Disco("Disco2", 2021, [new Cancion("Cancion2", 4, "Rock", false, 200)])]);
const biblioteca = new Biblioteca([artista1, artista2]);

console.log(biblioteca.buscarArtista("Artista1")); // Should print details of Artista1
console.log(biblioteca.buscarArtista("Artista3")); // Should print an empty array

// Test the buscarDisco function
console.log(biblioteca.buscarDisco("Disco1")); // Should print details of Disco1
console.log(biblioteca.buscarDisco("Disco3")); // Should print an empty array

console.log(biblioteca.buscarCancion("Cancion1"))