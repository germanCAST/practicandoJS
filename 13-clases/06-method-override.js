class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {
    console.log("Guardado en Entidad");
  }
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
  save() {
    super.save();
    console.log("Guardado en Usuario");
  }
}

const u = new User("German");
