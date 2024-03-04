const usuario = {
  nombre: "Ruso",
  apellido: "Azul",
  get nombreCompleto() {
    return `${usuario.nombre} ${usuario.apellido}`;
  },
  set nombreCompleto(valor) {
    const [nombre, apellido] = valor.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  }
};

usuario.nombreCompleto = "El Ejemplo";
console.log(usuario.nombreCompleto);
