//id1,recuperarClave: function(){}
//funciones constructoras usan UpperCamelCase
/// la primera letra es con inicial mayuscula

function Usuario(id) {
  this.id = id;
  this.recuperarClave = function () {
    /**
     * los métodos están vinculados a objetos específicos
     * y actúan sobre los datos asociados a esos objetos.
     */
    return "recuperando clave";
  };
}

let usuario = new Usuario("Hola");

console.log(usuario);
console.log(usuario.recuperarClave() + " de Usuario " + usuario.id);
console.log(usuario.id);
