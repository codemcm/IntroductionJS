/**
 * Clausuras
 * Funciones anidadas que recuerdan el conjunto de variables
 * a las que podrian acceder por mas que se les invoque
 * desde otro lugar
 *Uso
    2 Fabrica de funciones
    1 proteger acceso a las variables
 */

function main() {
  function crearContador() {
    let contador = 0;
    return function incrementar() {
      contador = contador + 1;
      return contador;
    };
  }

  const contador1 = crearContador();
  const contador2 = crearContador(); //este es otro contador
  contador1();
  contador1();
  contador2();
}
