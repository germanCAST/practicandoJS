const obj = {
  nombre: "German"
};

// function extender(usuario) {
//   obj.login = () => {
//     console.log("Hola", obj.nombre);
//   };

//   obj.logout = () => {
//     console.log("Adios", obj.nombre);
//   };

//   return obj;
// }

function extender(usuario) {
  const metodos = {
    login() {
      console.log("Hola", this.nombre);
    },
    logout() {
      console.log("Adios", this.nombre);
    }
  };

  return Object.assign(usuario, metodos);
}

const usuario = extender(obj);

console.log(usuario);

try {
  usuario.login();
  usuario.logout();
} catch (error) {
  console.log(error);
}
