// function suma(a, b) {
//   let total = 0;
//   for (let valor of arguments) {
//     total += valor;
//   }
//   return total;
// }
//Muy 2015

function suma(a, b) {
  return Array.from(arguments).reduce((acc, el) => acc + el);
}

console.log(suma(1, 2, 3, 4));
