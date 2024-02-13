// (function saludar(...rest) {
//   console.log(this, rest);
// }).bind({ propiedad: "Hola mundo" })(1, 2);

// saludar.call({ propiedad: "Hola mundo" }, 1, 5);
//saludar.apply({ propiedad: "Hola mundo" }, [1, 5]);

const usuario = {
  nombre: "German",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach(function (ciudadania) {
      //window
      console.log(this.nombre, ciudadania);
    }, this);
  }
};

usuario.mostrarCiudadanias();
