const usuarios = [
  { edad: 20, nombre: "Juan" },
  { edad: 23, nombre: "Jose" },
  { edad: 32, nombre: "Pedro" },
  { edad: 13, nombre: "Felipe" },
  { edad: 11, nombre: "German" },
  { edad: 12, nombre: "Jerson" }
];
//se usa mucho
//crear arrays basandonos en uno existente

const lista = usuarios
  .filter((u) => u.edad > 17)
  .map((usuario) => `<li>${usuario.nombre}</li>`);
const html = `<ol>${lista.join("")}</ol>`;
console.log(html);

// const mapped = usuarios.map((u) => ({
//   ...u,
//   mayor: u.edad > 17
// }));

// console.log(mapped);
