let el = document.createElement("p");
el.innerText = "Elemento Creado"; //solo texto
// el.innerHTML = "<ul><il>Hola</il></ul>";
document.body.append(el);

el.style = "background-color: red; font-weight: bold";
el.className = "parrafo";
el.id = "mi-parrafo";
//no funciona
// el.mipropiedad = "mi propiedad";

el.setAttribute("mipropiedad", "mi-propiedad");
el.getAttribute("mipropiedad");
el.hasAttribute("mipropiedad");
