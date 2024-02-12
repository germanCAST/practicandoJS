function precioCompleto(precio, impuesto) {
  if (precio <= 0) {
    return impuesto;
  } else {
    return precio * impuesto + precio;
  }
}

let resultado = precioCompleto(19.9, 0.15);
console.log(resultado);
