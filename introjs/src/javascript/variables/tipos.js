/**
 * Javascript tiene seis tipos primitivos:
 *  Sin definir (undefined),
 * Nulo (null),
 * Lógicos (boolean),
 * Numérico (number),
 * Cadena (string),
 * Símbolo (symbol).
 * Todos los demás tipos son objetos
 * (Object): Array, Date, Promise, etc.
 */

function main() {
  let num = 4;
  let othernumber = num;

  num = 5;

  console.log(othernumber);

  var fruta = {
    nombre: "manzana",
  };
  var otherFruta = fruta; //cuando son objetos apunta  a una referencia de memoria
  fruta.nombre = "pera";
}
