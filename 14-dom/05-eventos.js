let from = document.createElement("from");
from.id = "mi-formulario";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "ENVIAR";
from.append(input);
from.append(btn);

document.body.append(from);

from.onmouseenter = (e) => {
  console.log("entra el mouse", e);
};

from.onmouseleave = (e) => {
  console.log("sale el mouse");
};

input.onfocus = (e) => {
  console.log("input con focus");
};

input.onblur = (e) => {
  console.log("input perdio el foco");
};

input.onchange = (e) => {
  console.log("valor cambia", e.target.value);
};

// input.onclick = (e) => {
//   e.preventDefault();
//   console.log("boton clickeado");
// };

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton clickeado");
});
