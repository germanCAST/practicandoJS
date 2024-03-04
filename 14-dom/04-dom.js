let el = document.createElement("p");
el.innerText = "Elemento Creado";
flow = "<p>Hola, soy un parrafo</p>";
// //puede recbir texto o nodos
// document.body.append(el);
// el.remove();
// //unidireccional
// document.body.prepend(el);

// let div = document.createElement("div");
// div.innerText = "Soy un texto";
// el.replaceWith(div);

// //alternativa
// document.body.replaceChild(el, div);
// document.body.removeChild(el);
// document.body.appendChild(el);

// document.body.insertBefore(div, el);
// document.body.insertAdjacentElement("beforebegin", div);
// document.body.insertAdjacentElement("afterbegin", div);
// document.body.insertAdjacentElement("beforeend", div);
// document.body.insertAdjacentElement("afterend", div);

document.body.insertAdjacentHTML("afterbegin", flow);
document.body.insertAdjacentText("afterbegin", flow);
