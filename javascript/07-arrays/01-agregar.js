const letras = ["a", "b"];
//agregar al comienzo
letras.push("c", "d");
console.log(letras);

//agregar al final
letras.unshift("y", "z");
console.log(letras);

//inicio, elementos a eliminar, elementos que agregar
letras.splice(3, 0, 1, 2);
console.log(letras);
