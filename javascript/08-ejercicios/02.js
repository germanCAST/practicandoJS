const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

// function dividePorTipo(arr) {
//   const obj = {
//     numeros: [],
//     string: [],
//     objetos: []
//   };
//   for (const iterator of arr) {
//     if (typeof iterator === "number") obj.numeros.push(iterator);
//     if (typeof iterator === "string") obj.string.push(iterator);
//     if (typeof iterator === "object") obj.objetos.push(iterator);
//   }

//   console.log(obj);
// }

function dividePorTipo(arr) {
  return {
    numeros: arr.filter((n) => typeof n === "number"),
    string: arr.filter((n) => typeof n === "string"),
    objetos: arr.filter((n) => typeof n === "object")
  };
}

//numeros, string,objetos
const numeroArray = dividePorTipo(miArray);
console.log(numeroArray);
