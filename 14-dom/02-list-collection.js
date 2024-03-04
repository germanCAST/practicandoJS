//No es un array es un
let collecion = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");
// console.log(collecion, list);

// let item1 = collecion.namedItem("Juan");
// let item2 = collecion.item(3);
// let item3 = collecion[3];

//itererar elementos
// for (let iterator of collecion) {
//   console.log(iterator);
// }

// Array.from(collecion).forEach((x) => console.log(x));
// [...collecion].forEach((x) => console.log(x));

// let item1 = list.item(3);
// let item2 = list[3];
// console.log(item1, item2);

// list.forEach((x) => console.log(x));

//entries, keys y values

// let entres = list.entries();
// let keys = list.keys();
// let values = list.values()

[...list].forEach((el) => console.log(el));
