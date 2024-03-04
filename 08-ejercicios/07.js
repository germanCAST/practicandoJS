const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 13, nombre: "Jose", plan: "free" },
  { edad: 32, nombre: "Louis", plan: "gold" },
  { edad: 25, nombre: "Java", plan: "free" }
];

function groupBy(arr, prop) {
  return arr.reduce((acc, el) => {
    let valor = el[prop];
    acc[valor] = acc[valor] ? acc[valor] : [];
    acc[valor].push(el);
    return acc;
  }, {});
}

const grouped = groupBy(usuarios, "plan");
console.log({ grouped });
