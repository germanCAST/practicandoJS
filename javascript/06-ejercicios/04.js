let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {},
  logout: function () {}
};

function cualesMetodos(obj) {
  let tipo;
  for (const key in obj) {
    tipo = typeof obj[key];
    tipo === "function" ? console.log(key) : false;
  }
}

cualesMetodos(objeto);
