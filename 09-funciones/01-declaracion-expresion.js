console.log(resta); //Hoisting
//Declaracion de funciones

function suma() {
  console.log("Sumando...");
}
// Función anónima
// function () {
//     console.log('funcion anónima');
// }

//Expresion de funciones =>funcion expresion
//expresion de funcion anonima
const resta = function () {
  console.log("Restando");
};

const multiplica = function multi() {
  //named function expression
  console.log("Restando");
};

const divida = () => {
  //anónima
  console.log("dividiendo");
};
