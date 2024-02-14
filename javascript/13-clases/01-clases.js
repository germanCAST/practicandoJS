//EN JAVASCRIPT NO TIENE CLASES TRADICIONALES

const u = new User("german");

//Funcion constructora
function User(name) {
  this.name = name;
  this.instancia = function () {};
}

User.prototype.login = function () {
  console.log("Hola mundo!");
};
//Funcion Constructora
//Clase

// class User {
//   constructor(name) {
//     this.name = name;
//     this.instancia = function () {};
//   }

//   activo = true;

//   logout() {
//     console.log("logout");
//   }

//   login() {
//     console.log("Logeando");
//   }
// }
