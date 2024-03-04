//Personajes

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

//objeto
let personaje = {
  nombre: "Tanjiro", //Propiedad
  //par llave-valor
  anime: "Demon Slayer",
  edad: 16
};

console.log(personaje["anime"]);

personaje["anime"] = 16;
personaje.edad = 13;

delete personaje.anime;

console.log(personaje);
