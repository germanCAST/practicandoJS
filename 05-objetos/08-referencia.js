let a = { prop: 1 };
//cada que enviamos parametros
//JS asigna un nuevo espacio
//n es un nuevo parametro
function suma(n) {
  n.prop++;
}

suma(a);
console.log(a);
//los objetos se pasan por referencia
//*********IMPORTANTE */
//Los primitivos se copian cuando
// los asignamos con otra variable
//los de referencia se copia la direccion y se obtienen
//las mismas propiedades, Objetos, Array, Funciones
