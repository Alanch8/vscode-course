import { Hero } from "./extra/classes";

/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2
*/

const wolverine = new Hero();
const ironman = new Hero();
const spiderman = new Hero();

function saludar() {
  return "El SuperHeroe Wolverine es genial!";
}

function gritar() {
  return "El SuperHeroe en este string no se debe de cambiar";
}
