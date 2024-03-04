const ahora = new Date();
// console.log(ahora);

const fecha = new Date("December 11 1986 14:15 GMT-0300");
// console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14 + 9, 15);

//CLIENTE
console.log("Date String", fecha3.toDateString());
//SERV
console.log("ISO String", fecha3.toISOString());

console.log("TIME String", fecha3.toTimeString());

fecha3.setFullYear(2024);

console.log(fecha3);
