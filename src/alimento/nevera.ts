import { Bebida, Alimento } from "./alimento_bebida";

/**
 * Clase nevera
 */
export class Nevera {
  /**
   * 
   * @param Alimentos - Lista de alimentos y la cantidad
   * @param Bebidas - Lista de bebidas y su cantidas
   */
  constructor(private Alimentos: [Alimento, number][], private Bebidas: [Bebida, number][]) {}

  /**
   * Constructor de la clase
   * @returns Devuelve una lista de alimentos y bebidas que hay en la nevera
   */
  consultarListado():(Alimento| Bebida)[] {
    const cadena :  (Alimento| Bebida)[] = []
    this.Alimentos.forEach(alimento => {
      if(alimento[1] > 0) {
        cadena.push(alimento[0])
      }
    })
    this.Bebidas.forEach(bebida => {
      if(bebida[1] > 0) {
        cadena.push(bebida[0])
      }
    });
    return cadena
  }

  /**
   * FUncion que añade o quita un elemento de la nevera
   * @param añadidoQuitado - Elemento a añadir o a quitar 
   * @param flag - true = añade, false = quita
   * @returns devuelve una lista de elemtnos disponibles despues de la modificacion
   */
  añadirQuitarComida(añadidoQuitado: [Alimento,number], flag: boolean):(Alimento)[] {
    const valores : Alimento[] = []
    let contador = 0
    this.Alimentos.forEach((alimento,index) => {
      if(alimento[0].id === añadidoQuitado[0].id) {
        if(flag === true) {
          this.Alimentos[index][1] = alimento[1] + añadidoQuitado[1]
          contador = 1
        } else {
          this.Alimentos[index][1] = this.Alimentos[index][1] - añadidoQuitado[1]
          contador = 1
        }

      }
    })
    if (contador === 0 && flag === true){
      this.Alimentos.push(añadidoQuitado)
    }
    this.Alimentos.forEach(comida => {
      if(comida[1]>0) {
        valores.push(comida[0])
      }
    })

    return valores
  }
  /**
   * Funcion que añade o quita
   * @param añadidoQuitado - Elemento a añadir o quitar
   * @param flag - true = añade, false = quita
   * @returns devuelve una lista de elementos disponibles despues de la modificacion
   */

  añadirQuitarBebida(añadidoQuitado: [Bebida,number], flag: boolean):(Bebida)[] {
    const valores : Bebida[] = []
    let contador = 0
    this.Bebidas.forEach((bebida,index) => {
      if(bebida[0].id === añadidoQuitado[0].id) {
        if(flag === true) {
          this.Bebidas[index][1] = bebida[1] + añadidoQuitado[1]
          contador = 1
        } else {
          this.Bebidas[index][1] = this.Bebidas[index][1] - añadidoQuitado[1]
          contador = 1
        }

      }
    })
    if (contador === 0 && flag === true){
      this.Bebidas.push(añadidoQuitado)
    }
    this.Bebidas.forEach(bebida => {
      if(bebida[1]>0) {
        valores.push(bebida[0])
      }
    })

    return valores
  }

  /**
   * Funcion que lista las cosas que hay que comprar, es decir, que no hay 
   * @returns Devuelve lista de bebidas que hay que comprar
   */
  listadoBebidasCompra(): Bebida[] {
    const cadena: Bebida[] = []
    this.Bebidas.forEach(bebida => {
      if (bebida[1] <= 0) {
        cadena.push(bebida[0])
      }
    } )
    return cadena
  }

/**
   * Funcion que lista las cosas que hay que comprar, es decir, que no hay 
   * @returns Devuelve lista de bebidas que hay que comprar
   */
  listadoAlimentoCompra(): Alimento[] {
    const cadena: Alimento[] = []
    this.Alimentos.forEach(alimento => {
      if (alimento[1] <= 0) {
        cadena.push(alimento[0])
      }
    })
    return cadena
  }
}