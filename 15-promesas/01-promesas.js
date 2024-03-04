//las promesas representan el estado de una peticion
//Pending: Pendiente,Rejected: Rechazada ,Fulfilled: Terminada
//realizar consultas a base de datos
//peticiones a servidores
//webworkers

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola"), 1000);
});

let promesa2 = new Promise((resolve, reject) => {
  resolve(1 + 1);
  reject(2 + 2);
});

promesa2.then(
  (valor) => console.log(valor),
  (e) => console.log("error", e)
);
