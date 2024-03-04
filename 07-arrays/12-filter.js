const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Juan" },
  { edad: 17, nombre: "Jose" },
  { edad: 32, nombre: "Alana" },
  { edad: 24, nombre: "Mylo" },
  { edad: 42, nombre: "Nestor" }
];

const mayores = usuarios.filter((u) => u.edad > 17);
const menores = usuarios.filter((u) => u.edad < 18);
console.log(menores);
