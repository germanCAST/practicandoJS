//busqueda de indices, rápido
//HTMLElement
let htmlElement = document.getElementById("cuerpo");

//Se parece un array pero no lo es, HTMLCollection
let elementosRed = document.getElementsByClassName("red");

//NodeList
let elementosJuan = document.getElementsByName("Juan");

//HTMLCollection
let parrafos = document.getElementsByTagName("p");

//lentos
//HTMLElement, selecciona el primero que encuentra
//Dinamico
let el = document.querySelector("#cuerpo");
//Estatico
//Node List, . clase de css, # con id, etiqueta <nombreEtiqueta>
let els = document.querySelectorAll("p");

//HTMLCollection, no importa cuantas veces nosotros manipulemos DOM
//NodeList, no siempre sincroniza con los cambios
