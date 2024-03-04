let promesa1 = (param1) =>
  new Promise((res, rej) => {
    const b = "Hola Mundo";
    res(b);
  });

let promesa2 = (param2) =>
  new Promise((res, rej) => {
    res(param2 + ", Hola Mundo");
  });

let promesa3 = (param1, param2) =>
  new Promise((res, rej) => {
    res("Hola german");
  });

// Promise.resolve("Primer Valor").then((a) => {
//   return promesa1(a).then((b) => {
//     return promesa2(b).then(() => promesa3(a, b));
//   });
// });

async function main() {
  try {
    const a = await Promise.resolve("Primer valor");
    const b = await promesa1(a);
    const _ = await promesa2(b);
    promesa1(a, b);
  } catch (error) {
    console.log({ error });
  }
}

main();
