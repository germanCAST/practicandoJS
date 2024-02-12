const user = { id: 1 }; //Objeto
//adecuarme a lo que piensa mi EQUIPO
user.name = "German"; //cambio dinamico

user.guardar = function () {
  console.log("Guardando", user.name);
}; //

user.guardar();

delete user.name; //se pueden borrar las propiedades
delete user.guardar; //se pueden borrar propiedades del objetos
console.log(user);

const user1 = Object.seal({ id: 1 });
//FREEZE: es para congelar las propiedades,
//SEAL: propiedades fijas pero valores cambiables
user1.name = "GermaFn";
user1.id = 3;
console.log(user1);

/**
 * Se pueden cambiar los elementos adentro del objeto
 * pero no las asignaciones de él
 *
 * no podemos cambiar la asignacion con otro tipo solo las propiedades
 * del objeto,
 */
