function paraAbsoluto(arr) {
  console.log(arr.map((n) => Math.abs(n)));
}
//funcion Math.abs -> que convertira el valor en absoluto
//fat arrow function *******

const ns = [-2, 3, 5, -15];
const absolutos = paraAbsoluto(ns);
console.log(absolutos);
