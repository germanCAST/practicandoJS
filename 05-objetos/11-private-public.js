function Usuario() {
  let id = 1;
  this.name = "German";

  let log = function () {
    console.log("logging...");
  };

  this.guardar = function () {
    log();
    console.log("Guardando...");
  };
}

const usuario = new Usuario();
usuario.guardar();
