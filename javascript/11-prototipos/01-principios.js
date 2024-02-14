//Programacion estructurada
// let nombre = "Hola";
// let apellido = "Mundo";

// function getNombreCompleto(nombre, apellido) {
//   return [nombre, apellido].join("");
// }

// let fullname = getNombreCompleto(nombre, apellido);

//Programacion Orientada a Objetos
//encapsulacion
// const user = {
//   nombre: "German",
//   apellido: "Castellanos",
//   getNombreCompleto() {
//     return [this.nombre, this.apellido].join(" ");
//   }
// };
// console.log(user.getNombreCompleto());

// 4 principios de POO
/**
 * Encapsulacion -- agrupar metodos y propiedades
 * Abstraccion --- esconder detalles
 * Herencia --- que A le pueda asignar a B elementos de A
 * Polimorfismo --- muchos objetos pueden tener el mismo metodo
 *
 */

//Abstraccion
// const user = new User(); //creando una instancia de usuario
// user.password = "contaseñaEjemplo";
// user.save();

//Herencia
// User ------------> id,nombre,guardar()
// Restaurante -----> id,nombre,guardar()
// Motociclista ----> id,nombre,guardar()

//funcion Constructora madre
//FCPadre heredara a otras Funciones Constructoras estas se comporta como prototipos
//CLASES es Prototipos

// function validaEntidad(entidad) {
//   //...

//   switch (entidad.nombre) {
//     // case "user":
//     //   entidad.save();
//     //   break;
//     // case "restaurante":
//     //   entidad.guardar();
//     //   break;

//     entidad.save();
//   }
// }

//Herencia
//ambos tienen 1 ó más elementos similares
//extiende
//class para poder crear objetos que compartan propiedades, metodos
//user <-- id,guardar()
//productos <--id,guardar()

//JavaScript
//objeto PROTITPO un OBJETO SE VINCULA A OTRO
//
