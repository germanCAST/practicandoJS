//atajos de JavaScript
let obj = {};
//ó
let obj2 = new Object();
/**
 * new Array(); []
 * new String(); "" '' `` *literales* se comportan distinto
 * new Number(); 12 *literales* se comportan distinto
 * new Boolean(); true/false *literales* se comportan distinto
 */

function Usuario() {
  this.name = "Flow";
}
let user = new Usuario();
console.log(user);

const s1 = "1+1";
console.log(s1);
const s2 = new String("1 + 1");
// en caso se encuentren declarados con el constructor
console.log(s2.valueOf());

//valueOf(), boolean, number
