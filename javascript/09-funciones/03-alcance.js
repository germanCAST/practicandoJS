let afuera = "esto afuera";
function alcance() {
  afuera = "estoy adentro";
  function saludo() {}
  var vieja = "ya no usar";
  let variable = "Hola mundo";
  const consante = "Hola mundo!";
}

console.log(afuera);
alcance();

console.log(afuera);
