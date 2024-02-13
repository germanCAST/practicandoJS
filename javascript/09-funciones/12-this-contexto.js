//contextos de this
const usuario = {
  nombre: "German",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach((ciudadania) => {
      //window
      console.log(this.nombre, ciudadania);
    });
  }
};

usuario.mostrarCiudadanias();
