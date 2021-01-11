/**
 * JavaScript es un lenguaje de programación
 * El estandar para JS es EMASCRIPT
 * -> Con funciones de primera clase
 */

/**
 * Un lenguaje de programación se dice que tiene
 * funciones de primera clase cuando las
 * funciones son tratadas como cualquier variable
 *    -Una función, puede ser pasada como arg
 *    - retornada por otra funcion
 *    - asignada a una variable
 * 'use strict';
 */

/**
 *Recomendaciones
 * Usar el modo Stricto 
      Una forma de elegir un JS mas restringido
      -Evita la creación de variables globales
       Elimina errores silenciosos

       ECMAScript 2016, hemos comprobado que 
       el TC-39 ha tenido que eliminar el uso 
       de la directiva «use strict» 
       en el cuerpo de aquellas funciones 
       donde sus parámetros utilizan valores 
       por defecto, desestructuración o el 
       arrastre

 * Enfocarse en ES6 (2015)
      Agrega let y const
      Funciones flecha
      Destructuring
      Operador spread  (sum(...numbers))
      
 */
function saludar() {
  console.log("bu");
}
