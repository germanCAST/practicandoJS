function User() {
  this.name = "Hola mundo";
  //metodo de instancia
  this.logger = function () {
    console.log("Loggeando...");
    this.login();
  };
}

const user1 = new User();
const user2 = new User();

//metodo de prototipo
User.prototype.login = function () {
  console.log("Iniciando Sesión", this.name);
};
User.prototype.toString = function () {
  console.log("Usuario:", this.name);
};
console.log(user1);
