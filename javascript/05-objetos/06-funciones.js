//funcion, objetos de primera clase
function Usuario(nombre) {
  this.nombre = nombre;
  return this.nombre;
}

//nombre de la funcion
console.log(Usuario.name);
//cantidad de los argumentos que recibe la funcion
console.log(Usuario.length);

//se dice que U es una variable en donde se almacena la funcion
const U = Usuario;
//por lo que USER es igual a U para invocar a la funcion
//almacenada en U
let user = new U("Juand");

console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, "Juan");

console.log(user1);

function returned(name) {
  return function () {
    console.log("Hola, " + name);
  };
}

let saludo = returned("German");
saludo();
//las funciones son objetos de primera clase
