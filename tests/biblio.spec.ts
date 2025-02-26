import { describe, expect, test } from "vitest";
import { Artista } from "../src/biblio/artista";
import { Cancion } from "../src/biblio/cancion";
import { Disco } from "../src/biblio/dico";
import { Biblioteca } from "../src/biblio/biblioteca";

const cancion1 = new Cancion("Cancion1", 3, "Pop", true, 100);
const cancion2 = new Cancion("Cancion2", 4, "Rock", false, 200);
const cancion3 = new Cancion("Cancion3", 5, "Jazz", true, 300);

const disco1 = new Disco("Disco1", 2020, [cancion1, cancion2]);
const disco2 = new Disco("Disco2", 2021, [cancion2, cancion3]);

const artista1 = new Artista("Artista1", 1000, [disco1, disco2]);
const artista2 = new Artista("Artista2", 2000, [disco2]);

const biblioteca = new Biblioteca([artista1, artista2]);

describe("Biblioteca", () => {
  test("buscarArtista debe encontrar un artista por su nombre", () => {
    const resultado = biblioteca.buscarArtista("Artista1");
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe("Artista1");
  });

  test("buscarArtista devuelve un array vacío si el artista no existe", () => {
    const resultado = biblioteca.buscarArtista("ArtistaInexistente");
    expect(resultado).toEqual([]);
  });

  test("buscarDisco debe encontrar un disco por su nombre", () => {
    const resultado = biblioteca.buscarDisco("Disco1");
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe("Disco1");
  });

  test("buscarDisco devuelve un array vacío si el disco no existe", () => {
    const resultado = biblioteca.buscarDisco("DiscoInexistente");
    expect(resultado).toEqual([]);
  });

  test("buscarCancion debe encontrar una canción por su nombre", () => {
    const resultado = biblioteca.buscarCancion("Cancion1");
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe("Cancion1");
  });

  test("buscarCancion devuelve un array vacío si la canción no existe", () => {
    const resultado = biblioteca.buscarCancion("CancionInexistente");
    expect(resultado).toEqual([]);
  });

  test("duracionDisco debe calcular correctamente la duración total de un disco", () => {
    const resultado = biblioteca.duracionDisco("Disco1");
    expect(resultado).toBe(7);
  });

  test("duracionDisco devuelve undefined si el disco no existe", () => {
    const resultado = biblioteca.duracionDisco("DiscoInexistente");
    expect(resultado).toBeUndefined();
  });

  test("numeroReproduccionesDisco debe calcular correctamente las reproducciones totales de un disco", () => {
    const resultado = biblioteca.numeroReproduccionesDisco("Disco2");
    expect(resultado).toBe(1000);
  });

  test("numeroReproduccionesDisco devuelve undefined si el disco no existe", () => {
    const resultado = biblioteca.numeroReproduccionesDisco("DiscoInexistente");
    expect(resultado).toBeUndefined();
  });

  test("numeroCancionesDisco debe calcular correctamente el número de canciones de un disco", () => {
    const resultado = biblioteca.numeroCancionesDisco("Disco2");
    expect(resultado).toBe(2);
  });

  test("numeroCancionesDisco devuelve undefined si el disco no existe", () => {
    const resultado = biblioteca.numeroCancionesDisco("DiscoInexistente");
    expect(resultado).toBeUndefined();
  });
});
