//Decimal: 1,2,3,4,5,6,7,8,9
//Binario: 0,1

//Comparamos bits
//Byte = 8 bits
//Byte= 00000000
//Byte= 00000000 -> 0
//Byte= 00000001 -> 1
//Byte= 00000010 -> 2
//Byte= 00000011 -> 3
//Byte= 00000100 -> 4
//Byte= 00000101 -> 5
//Byte= 00000110 -> 6
//Byte= 00000111 -> 7

//operaciones en bitwise
//OR, toma una cadena de byte y compara. si uno de los dos contiene un 1, entonces será 1
console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101

//AND, toma una cadena de byte y compara. si uno de los dos es 0, entonces será 0
console.log(1 & 3); // 00000001
console.log(1 & 7); // 00000001

//se usan muy poco en el campo laboral, 2024
