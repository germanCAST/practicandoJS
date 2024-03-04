const usuarios = [
  { id: 1, name: "Juan" },
  { id: 1, name: "Felipe" },
  { id: 2, name: "Pedro" }
];

const resultado = usuarios.findIndex((usuario) => usuario.id === 1);
console.log(resultado);
