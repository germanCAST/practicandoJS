const p1 = Promise.resolve("fallo de conexion");
const p2 = Promise.reject(42);
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, "foo");
});

// Promise.all([p1, p2, p3])
//   .then((valor) => {
//     console.log("Hola", valor);
//   })
//   .catch((e) => {
//     console.log("rechazada:", e);
//   });

// Promise.race([p1, p2, p3])
//   .then((valores) => {
//     console.log("Valores: ", valores);
//   })
//   .catch((e) => {
//     console.log("Se rechazo alguna promise", e);
//   });

// Promise.any([p1, p2, p3])
//   .then((valor) => {
//     console.log({ valor });
//   })
//   .catch((e) => {
//     console.log({ e });
//   });

Promise.allSettled([p1, p2, p3]).then((valores) => {
  console.log({ valores });
});
