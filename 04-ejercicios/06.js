let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let positivos = [];
  for (const numero of arr) {
    if (numero > 0) {
      positivos.push(numero);
    }
  }
  return positivos.length;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
