function getbyIdx(arr, idx) {
  if (idx >= 0) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      //german
      if (element != idx) {
        continue;
      } else {
        return "elemento: " + element + " en index: " + index;
      }
    }
  }
  return "elemento no disponible";
}

let resultado = getbyIdx([9, 15, 60], 66);
console.log(resultado);
