const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 13, nombre: "Jose", plan: "free" },
  { edad: 32, nombre: "Louis", plan: "free" },
  { edad: 25, nombre: "Java", plan: "gold" }
];

//Obtener los usuarios pago
//Ordenar de mayor a menor
//Devolver el nombre de usuario
//Crear template string HTML
/**
 * <ul>
 * <li>Felipe</l1>
 * <ul>
 * <li></l1>
 * <ul>
 */

const pagos = usuarios.filter((u) => u.plan !== "free");

pagos.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad < b.edad) return -1;
  return 0;
});

const list = pagos.map((u) => `<li>${u.nombre}</li>`);
const html = `
<ul>
${list.join(`
`)}
</ul>
`;
console.log(html);
