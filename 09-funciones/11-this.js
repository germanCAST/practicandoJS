// (dentro de un objeto) this hace refencia a un objeto
// (en una funcion)  this hace referencia al objeto windows, global
// (en new)new hace referencia al objeto que será creado

//this hace refencia a un objeto
// const user = {
//   name: "German",
//   login() {
//     console.log(this);
//   }
// };

// user.logout = function logout() {
//   console.log(this);
// };

// user.logout();

//
// function log() {
//   console.log(this);
// }
// log();

/**
 * se crea un ojbeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */

function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

const l = new Log("Hola mundo");
