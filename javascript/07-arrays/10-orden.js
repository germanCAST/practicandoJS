// let numeros = [15, 10, -3];

// numeros.sort();
// numeros.reverse();
// console.log(numeros);

//Numeros y Letras

// let conMayusculas = ["Z", "a", "d"];
// conMayusculas.sort((a, b) => {
//   let alower = a.toLowerCase();
//   let blower = b.toLowerCase();

//   if (alower < blower) {
//     return -1;
//   }

//   if (alower > blower) {
//     return 1;
//   }
//   return 0;
// });
// console.log(conMayusculas);

let usuarios = [
  { edad: 20, nombre: "Juan" },
  { edad: 22, nombre: "Luis" },
  { edad: 12, nombre: "Tito" }
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad < b.edad) return 1;
  return 0;
});

for (const iterator of usuarios) {
  console.log(iterator.edad, iterator.nombre);
}
