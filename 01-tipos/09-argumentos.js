function suma(a, b){
    console.log(arguments); // no recomendado
    return a+b; //parametros
}

let resultado = suma(5,6,1,2,3); //argumentos
console.log(resultado);
console.log(typeof suma);

