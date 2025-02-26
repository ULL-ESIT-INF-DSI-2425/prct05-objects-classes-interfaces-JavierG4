import { describe, test, expect } from "vitest";
import { Combat } from "../src/poke/combat";
import { Pokedex } from "../src/poke/pokedex";
import { Pokemon, tipo, statsBasicas, statsFisicas } from "../src/poke/pomekon";

const statsFisicasPikachu: statsFisicas = [5, 0.4];
const statsBasicasPikachu: statsBasicas = [55, 40, 50, 35];
const pikachu = new Pokemon("Pikachu", statsFisicasPikachu, tipo.electrico, statsBasicasPikachu);

const statsFisicasCharmander: statsFisicas = [8, 0.5];
const statsBasicasCharmander: statsBasicas = [52, 43, 60, 39];
const charmander = new Pokemon("Charmander", statsFisicasCharmander, tipo.fuego, statsBasicasCharmander);

const statsFisicasSquirtle: statsFisicas = [9, 0.6];
const statsBasicasSquirtle: statsBasicas = [48, 65, 43, 44];
const squirtle = new Pokemon("Squirtle", statsFisicasSquirtle, tipo.agua, statsBasicasSquirtle);

const statsFisicasBulbasaur: statsFisicas = [6.9, 0.7];
const statsBasicasBulbasaur: statsBasicas = [49, 49, 45, 45];
const bulbasaur = new Pokemon("Bulbasaur", statsFisicasBulbasaur, tipo.planta, statsBasicasBulbasaur);

describe("Combate Pokémon", () => {

  test("Charmander (fuego) debería ganar contra Bulbasaur (planta)", () => {
    const combate = new Combat(charmander, bulbasaur);
    const ganador = combate.start();
    expect(ganador).toBe(charmander);
  });

  test("Squirtle (agua) debería ganar contra Charmander (fuego)", () => {
    const combate = new Combat(squirtle, charmander);
    const ganador = combate.start();
    expect(ganador).toBe(squirtle);
  });

  test("Pikachu (eléctrico) debería ganar contra Squirtle (agua)", () => {
    const combate = new Combat(pikachu, squirtle);
    const ganador = combate.start();
    expect(ganador).toBe(pikachu);
  });

  test("Bulbasaur (planta) debería ganar contra Squirtle (agua)", () => {
    const combate = new Combat(bulbasaur, squirtle);
    const ganador = combate.start();
    expect(ganador).toBe(bulbasaur);
  });

  test("Pikachu (eléctrico) vs Bulbasaur (planta) debería ser parejo", () => {
    const combate = new Combat(pikachu, bulbasaur);
    const ganador = combate.start();
    expect([pikachu, bulbasaur]).toContain(ganador);
  });

  test("Pikachu (eléctrico) vs Charmander (fuego) debería ser parejo", () => {
    const combate = new Combat(pikachu, charmander);
    const ganador = combate.start();
    expect([pikachu, charmander]).toContain(ganador);
  });
});


describe("Pokedex", () => {
  const pokedex = new Pokedex([pikachu, charmander, squirtle, bulbasaur]);

  test("Buscar Pokémon por tipo fuego debería devolver solo Charmander", () => {
    const resultado = pokedex.buscarPokemon([[true, tipo.fuego], [false, undefined], [false, undefined], [false, undefined]]);
    expect(resultado).toEqual([charmander]);
  });

  test("Buscar Pokémon por tipo agua debería devolver solo Squirtle", () => {
    const resultado = pokedex.buscarPokemon([[true, tipo.agua], [false, undefined], [false, undefined], [false, undefined]]);
    expect(resultado).toEqual([squirtle]);
  });

  test("Buscar Pokémon por nombre 'Pikachu' debería devolver Pikachu", () => {
    const resultado = pokedex.buscarPokemon([[false, undefined], [false, undefined], [false, undefined], [true, "Pikachu"]]);
    expect(resultado).toEqual([pikachu]);
  });

  test("Buscar Pokémon por estadísticas básicas de Charmander debería devolver Charmander", () => {
    const resultado = pokedex.buscarPokemon([[false, undefined], [true, statsBasicasCharmander], [false, undefined], [true, "Charmander"]]);
    expect(resultado).toEqual([charmander]);
  });

  test("Buscar un Pokémon inexistente debería devolver un array vacío", () => {
    const resultado = pokedex.buscarPokemon([[true, tipo.planta], [true, statsBasicasCharmander], [false, undefined], [false, undefined]]);
    expect(resultado).toEqual([]);
  });
});
