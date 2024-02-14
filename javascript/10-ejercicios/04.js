function suma(fn, ...rest) {
  //   let numero = 0;
  //   for (const iterator of rest) {
  //     numero += iterator;
  //   }
  //   return fn(numero);

  let resultado = rest.reduce((acc, el) => acc + el, 0);
  return fn(resultado);
}

suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
