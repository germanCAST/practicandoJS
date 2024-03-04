function createUsuario(name) {
  return {
    id: Math.random(),
    name
  };
}

let user = createUsuario("Felip");
let user2 = createUsuario("Fer");

console.log(user, user2);
