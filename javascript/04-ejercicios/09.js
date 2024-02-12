let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Felipe" }],
  [3, { name: "Chanchito" }]
];

let array = [
  { id: 1, name: "Nicolas" },
  { id: 2, name: "Felipe" },
  { id: 3, name: "Chanchito" }
];

function toPairs(arr) {
  for (const obj of pairs) {
    console.log(obj);
  }
}

let resultado = toPairs(pairs);
console.log(resultado);
