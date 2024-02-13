const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 18, nombre: "Jose", plan: "free" },
  { edad: 32, nombre: "Louis", plan: "free" }
];

const users = [
  { age: 22, name: "Juan", membership: "premium" },
  { age: 27, name: "Jose", membership: "free" },
  { age: 29, name: "Louis", membership: "free" }
];

//unificar estructuras de usuarios y user
//fusionar array
//ordernar por edad
//crear plantilla HTML:
//<li>Nombre: name, Edad: age </li>
//imprimir lista en consola

const usersEspanol = users.map((u) => ({
  edad: u.age,
  nombre: u.name,
  plan: u.membership
}));

const todos = [...usuarios, ...usersEspanol];

todos.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad > b.edad) return -1;
  return 0;
});

const lista = todos.map(
  (u) => `<li>Nombre: ${u.nombre}, Edad: ${u.edad} </li>`
);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`;

console.log(html);
