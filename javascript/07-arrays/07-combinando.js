let arr1 = [1, 2];
let arr2 = [3, 4];

let combinado = arr1.concat(arr2);
// console.log(combinado);

let divididos = combinado.slice(1, 3);

//genera copias por referencia
let dividi2 = combinado.slice();

console.log(dividi2);
