//crear Copias, no spreads, no Object.assign
let obj1 = { id: 1, name: "chanchito" };
function crearCopia(obj) {
  return obj;
}
let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });
