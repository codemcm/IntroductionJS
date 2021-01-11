/**
 * Metodos de los arrays
 * MAP -> Crea un arreglo con los resultados de la llamada
 *  Recibe de parametro la funcion convertidora
 *      Parametros de funcion
 *          1. Dato a transforma
 *          2. posicion opciona
 *          3. Array a iterar opciona (casi no se usa)
 * FILTER Toma los valores de un arreglo y decide si pasarlos o no(en base a una condicion)
 */

function useMap() {
  const numeros = [3, 10, 20];
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });
}

function useMapObject() {
  const productos = [
    { id: "calv2", nombre: "playera", precio: 40 },
    { id: "clave3", nombre: "pantalon", precio: 4500 },
  ];

  const productoDesc = productos.map(function (producto) {
    if (producto.precio < 1000) {
      return producto; //CONOCIDO COMO RETORNO TEMPRANO
    }
    producto.precio = producto.precio * 0.8; //ERROR modificamos el obj original
    //no pusimos el return
  });

  const productosDescuentoOk = productos.map(function (producto) {
    if (producto.precio < 1000) {
      return producto;
    }
    return {
      ...producto,
      precio: producto.precio * 0.9,
    };
  });

  //destructuring con map
  const idProductos1 = productos.map(function (producto) {
    return producto.id;
  });
  const idProductos2 = productos.map((producto) => producto.id);

  const idProductos3 = productos.map(({ id }) => id); //obtener id de los productos
}

function useFilter() {
  const productos = [
    { id: "calv2", nombre: "playera", precio: 40 },
    { id: "clave3", nombre: "pantalon", precio: 4500 },
  ];
  const prodBaratos = productos.filter((producto) => producto.precio < 1000);

  //alternativa SEPARAR EL PREDICADO (condicion)

  const esBarato = (producto) => producto.precio < 1000;
  const lBaratos = productos.filter(esBarato);
}

/**
 * REDUCE
 * regresa un valor escalar
 */

function usarReduce() {
  const numeros = [1, 3, 5, 15];
  let total = 0;
  //esto seria la forma larga...
  for (let numero of numeros) {
    total += numero;
  }
  //reduce
  //1er param de reduces es la funcion reductora
  //2do posicion inicial, en este caso es 0
  /**
   * En la funcion el
   * 1er parametro es el acumulador osease valor antes de iniciar
   * 2do elelemento actual
   * 3ro posicion
   * 4to el arreglo
   */
  let totalr = numeros.reduce((acumulador, numero) => {
    //retornamos el valor del acumulador actualizado
    return acumulador + numero;
  }, 0);
}
