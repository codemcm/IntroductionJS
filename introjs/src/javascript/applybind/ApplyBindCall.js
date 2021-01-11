/**
 *  CALL llama a una funcion con un valor dado this y con argumentos provistos
 * APPLY es como call pero recibe los argumentos en un arreglo []
 * BIND crea una nueva funcion, que asigna a su operador this el valor entregado
 */

function doCall() {
  const user = {
    name: "martin",
  };
  const business = {
    name: "universe code",
  };

  function showInfo(likes, friends) {
    return `${this.name} tiene ${likes} likes y ${friends} `;
  }

  console.log(showInfo.call(user, 4, 5));
  console.log(showInfo.apply(business, [5, 6]));

  const userBind = showInfo.bind(user);
  console.log(userBind(8, 9));
}
