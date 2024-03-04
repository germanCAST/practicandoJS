const saludo = "Hola Mundo!";

const despedida = new String("Chao");
console.log(typeof saludo);
console.log(typeof despedida);

//si no encuentra devuelve -1
console.log(saludo.indexOf("Mu"));
console.log(saludo.includes(" Mundo"));
let nuevo = saludo.replace("Mundo", "German");
console.log(nuevo);
console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase());

console.log(saludo.substring(0, 4));

console.log(saludo.substr(2, 4)); //deprecado
const espacios = "   Hola     Mundo         ";
console.log(espacios.trim());
