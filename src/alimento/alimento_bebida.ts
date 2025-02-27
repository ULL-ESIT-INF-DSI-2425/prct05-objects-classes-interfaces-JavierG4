/**
 * Clase asbtracta que representa o una bebida o un alimento
 */
export abstract class AliBebi {
  /**
   * Constructor de la clase
   * @param _id - Guarde el id del alimento/bebida
   * @param _name - Nombre del alimento/bebida
   * @param _nustriscore - Valor nutricional del alimento/bebida
   * @param _info_nutricional - Informacion nutriconal del alimento/bebida
   */
  constructor(
    protected _id: number,
    protected _name:string,
    protected _nustriscore:number,
    protected _info_nutricional:string
   ) {}

  /**
   * Metodo abstracto que se define en su clases hijas
   */
  abstract showInfo():(string | number)[];

  /**
   * Getter de id
   */
  get id() {
    return this._id
  }

  /**
   * Getter de name
   */
  get name() {
    return this._name
  }
  /**
   * Getter de nutriscore
   */
  get nutriscore() {
    return this._nustriscore
  }
  /**
   * Getter de informacion nutricional
   */
  get info_nutricional() {
    return this._info_nutricional
  }
}

/**
 * Clase alimento que hereda de AliBebi
 */
export class Alimento extends AliBebi {
  /**
   * 
   * @param _id - Guarde id del alimento
   * @param _name - Guarda el nombre del alimento
   * @param _nustriscore - Guarda el nutriscore
   * @param _info_nutricional - Gurda informacion nutricional
   * @param _gramos - Gudarda los gramos
   * @param _kcal - Guarda las calorías
   */
  constructor(
    _id: number,
    _name:string,
    _nustriscore:number,
    _info_nutricional:string,
    private _gramos:number,
    private _kcal: number
  ){
    super(_id,_name,_nustriscore,_info_nutricional)
  }
  /**
   * Metodo heredado de su padre e implementado en esta clase hija
   * @returns Devuelce un array de información
   */
  showInfo(): (string | number) [] {
    return [this._id, this.name, this._nustriscore, this._info_nutricional, this._gramos, this._kcal]
  }

  /**
   * Getter de gramos
   */
  get gramos() {
    return this._gramos
  }

  /**
   * Getter de kcal
   */
  get kcal() {
    return this._kcal
  }
}

export class Bebida extends AliBebi {
  /**
   * 
   * @param _id - Guarde id de la Bebida
   * @param _name - Guarda el nombre de la Bebida
   * @param _nustriscore - Guarda el nutriscore de la Bebida
   * @param _info_nutricional - Gurda informacion nutricional de la Bebida
   * @param _mililitros - Gudarda los mililitros de la Bebida
   * @param _minerales - Guarda minerales de la Bebida
   */
  constructor(
    _id: number,
    _name:string,
    _nustriscore:number,
   _info_nutricional:string,
    private _mililitros:number,
    private _minerales:string
  ){
    super(_id,_name,_nustriscore,_info_nutricional)
  }
  /**
   * Metodo heredado de su padre e implementado en esta clase hija
   * @returns Devuelce un array de información
   */
  showInfo(): (string | number) [] {
    return [this._id, this.name, this._nustriscore, this._info_nutricional, this._mililitros, this._minerales]
  }

    /**
   * Getter de mililitros
   */
  get mililitros() {
    return this._mililitros
  }
  /**
   * Getter de Minerales
   */
  get minerales() {
    return this._minerales
  }
}

