let objeto = {
  name: "German"
};

function agregarId(obj) {
  typeof obj === "object" ? (obj.id = Math.random()) : null;
}

agregarId(objeto);

console.log(objeto);
