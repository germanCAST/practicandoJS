//permiten crear objetos
//factory functions
//camelCase
function crearUsuario(nombre, email, valor) {
  return {
    email,
    nombre,
    valor,
    activo: true,
    //programacion orientada a objetos ó OOP ó POO
    recuperarClave: function () {
      console.log("recuperando Clave...");
    }
  };
}

let user1 = crearUsuario("German", "german@gmail.com");
let user2 = crearUsuario("Felipez", "pesx@gmail.com");

console.log(user1.valor, user2);
