let array = [
  { id: 1, name: "Nicolas" },
  { id: 2, name: "Felipe" },
  { id: 3, name: "Chanchito" }
];
/**
 * let pares = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }]
];
 * 
 */

function toPairs(arr) {
  let arre = [];
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    arre[index] = [element.id, element];
  }
  return arre;
}

let resultado = toPairs(array);
console.log(resultado);
