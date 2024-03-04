let punto = {
  x: 10,
  y: 15
};
//OBJECT .ASSIGN();

let referencia = Object.assign(punto, { z: 20, x: 1 });
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });
// console.log(referencia);

let copiaPunto = Object.assign({}, punto);
// console.log(copiaPunto, punto);

let copia3 = { ...punto };
// console.log(copia3);

let copia4 = {};
for (let llave in punto) {
  copia4[llave] = punto[llave];
}

console.log(copia4);
