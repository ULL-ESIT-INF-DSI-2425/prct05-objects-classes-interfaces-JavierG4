import { describe, test, expect } from "vitest";
import { Bebida, Alimento} from "../src/alimento/alimento_bebida";

const Alimento1: Alimento = new Alimento(10,"pollo", 20, "Muy saludable", 150, 200)
//const Alimento2: Alimento = new Alimento(15,"merluza", 10, "Poco saludable", 110, 240)
const Bebida1: Bebida = new Bebida(13, "Coca-Cola", 5, "poco saludable", 300, "Magenesio, hierro y azucares")

describe("Test de clase Alimento", ()=> {
  test("Get id", ()=> {
    expect(Alimento1.id).toEqual(10)
  })

  test("Get name", ()=> {
    expect(Alimento1.name).toEqual("pollo")
  })

  test("Get nutriscore", ()=> {
    expect(Alimento1.nutriscore).toEqual(20)
  })

  test("Get info nutricional", ()=> {
    expect(Alimento1.info_nutricional).toEqual("Muy saludable")
  })

  test("Get gramos", ()=> {
    expect(Alimento1.gramos).toEqual(150)
  })

  test("Get kcal", ()=> {
    expect(Alimento1.kcal).toEqual(200)
  })

  test("Showinfo", ()=> {
    expect(Alimento1.showInfo()).toEqual([10,"pollo", 20, "Muy saludable", 150, 200])
  })
})

describe("Test de clase Bebida", ()=> {
  test("Get id", ()=> {
    expect(Bebida1.id).toEqual(13)
  })

  test("Get name", ()=> {
    expect(Bebida1.name).toEqual("Coca-Cola")
  })

  test("Get nutriscore", ()=> {
    expect(Bebida1.nutriscore).toEqual(5)
  })

  test("Get info nutricional", ()=> {
    expect(Bebida1.info_nutricional).toEqual("poco saludable")
  })

  test("Get Mililitros", ()=> {
    expect(Bebida1.mililitros).toEqual(300)
  })

  test("Get minerales", ()=> {
    expect(Bebida1.minerales).toEqual("Magenesio, hierro y azucares")
  })

  test("Showinfo", ()=> {
    expect(Bebida1.showInfo()).toEqual([13, "Coca-Cola", 5, "poco saludable", 300, "Magenesio, hierro y azucares"])
  })
})