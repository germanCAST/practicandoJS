const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 13, nombre: "Jose", plan: "premium" },
  { edad: 32, nombre: "Louis", plan: "free" },
  { edad: 25, nombre: "Java", plan: "gold" }
];
function cuantosPremium(usrs) {
  return usrs.reduce((acc, el) => (el.plan !== "free" ? acc + 1 : acc), 0);
}
function cuantosMayores(usrs) {
  return usrs.reduce((acc, el) => (el.edad > 17 ? acc + 1 : acc), 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
