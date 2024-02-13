const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 13, nombre: "Jose", plan: "premium" },
  { edad: 32, nombre: "Louis", plan: "free" },
  { edad: 25, nombre: "Java", plan: "gold" }
];

function ObtenerMayor(arr) {
  let mayor = arr[0];
  for (const iterator of arr) {
    mayor.edad > iterator.edad ? (mayor = mayor) : (mayor = iterator);
  }
  return mayor;
}

const mayor = ObtenerMayor(usuarios);
console.log(mayor);
