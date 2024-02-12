let user = {
  email: "correo@correo.com",
  nombre: "correo",
  direccion: {
    calle: "calleQ",
    numero: "12"
  },
  activo: true,
  //programacion orientada a objetos ó OOP ó POO
  recuperarClave: function () {
    console.log("recuperando Clave...");
  }
};

console.log(!user.recuperarClave());
