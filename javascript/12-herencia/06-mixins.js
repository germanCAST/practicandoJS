function mixin(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}

let vuela = {
  vuela() {
    console.log("Volando");
  }
};

let nada = {
  nada() {
    console.log("Nadando");
  }
};

let bano = {
  bano() {
    console.log("yendo al baño");
  }
};

let camina = {
  camina() {
    console.log("caminando");
  }
};

//vuela, nada, camina, va al baño
function Pato() {
  this.name = "Patito";
}
mixin(Pato, vuela, nada, bano, camina);
let p = new Pato();

//camina,nada, va al baño
function Perro() {}
mixin(Perro, nada, bano, camina);

//nada, va al baño
function Pez() {}
mixin(Pez, nada, bano);

//vuela pero no nada, camina, ni va al bañ
function Avion() {}

mixin(Avion, vuela);
console.log(Avion.prototype, new Avion());
