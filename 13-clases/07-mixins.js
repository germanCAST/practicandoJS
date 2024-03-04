const Entidad = {
  save() {
    console.log("guardado de entidad");
  }
};

const Actualizar = {
  update() {
    console.log("guardado de entidad");
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
  save() {
    console.log("guardando en usuario");
  }
}
const nuevoProto = Object.assign({}, Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User("German");
u.save();
