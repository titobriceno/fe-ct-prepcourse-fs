/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let texto = nombre;
   let letra = '';
   texto = texto.split('');
   letra = texto[0];
   letra = letra.toUpperCase();
   texto.shift();
   texto.unshift(letra);
   texto = texto.join('');
   return texto
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let resultado = cb(operacionMatematica)
   return resultado
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let sum = 0
   for(let i = 0; i < arrayOfNumbers.length; i++){
      sum = sum + arrayOfNumbers[i];
   }
   cb(sum);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let nuevoArreglo = [];
   for(let i = 0; i < array.length; i++){
      nuevoArreglo.push(cb(array[i]))
   }
   return nuevoArreglo
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let letra = '';
   let palabra = '';
   let nuevoArreglo = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      palabra = arrayOfStrings[i];
      palabra = palabra.split('');
      letra = palabra[0]
      if(letra === 'a'){
         nuevoArreglo.push(arrayOfStrings[i]);
      }
   }
   return nuevoArreglo

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
