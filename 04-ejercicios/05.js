let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let escala = [0, 0];
  for (let index = 0; index < arr.length; index++) {
    const element = array[index];

    escala[0] = escala[0] < element ? escala[0] : element;
    escala[1] = escala[1] > element ? escala[1] : element;
    // if (escala[0] < element) {
    //   escala[0] = escala[0];
    //   //   console.log("menor: " + menor + " element:" + element);
    // } else {
    //   escala[0] = element;
    // }

    // if (escala[1] > element) {
    //   escala[1] = escala[1];
    //   //   console.log("menor: " + menor + " element:" + element);
    // } else {
    //   escala[1] = element;
    // }
  }
  return escala;
}
let numeros = getMenorMayor(array);
console.log(numeros);
