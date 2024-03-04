const usuarios = [
  { edad: 17, nombre: "Juan", plan: "premium" },
  { edad: 13, nombre: "Jose", plan: "free" },
  { edad: 32, nombre: "Louis", plan: "free" },
  { edad: 25, nombre: "Java", plan: "gold" }
];
function getPaidUsers(usrs) {
  return usrs.filter((u) => u.plan !== "free");
}

console.log(getPaidUsers(usuarios));
