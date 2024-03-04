//Propiedad existente
let objeto = {
  id: 1,
  name: false,
  login: function () {},
  logout: function () {}
};

let propiedad = "name";

function tieneProp(obj, propiedad) {
  let tiene = false;
  for (const key in obj) {
    if (key.includes(propiedad)) {
      tiene = true;
    }
  }
  return tiene;
}

console.log(tieneProp(objeto, propiedad));
