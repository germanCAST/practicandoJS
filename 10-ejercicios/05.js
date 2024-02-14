function ordenar(texto, fn) {
  fn(
    texto
      .toLowerCase()
      .split("")
      .filter((x) => x !== "")
      .sort()
      .join("")
  );
}

ordenar("hola mundo", console.log);
