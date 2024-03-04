let longitud = 7;

function crearArrray(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let index = 0; index < n; index++) {
    arr[index] = index + 1;
  }
  return arr;
}
let resultado = crearArrray(longitud);
console.log(resultado);
