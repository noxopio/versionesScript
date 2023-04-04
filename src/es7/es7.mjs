
//potencia
const ex=3**4;
console.log(ex)

//includes
let numbers = [1,2,3,4,5,6];
console.log(numbers.includes(11))

const letras = { a: 1, b: 2, c: 3 }

"a" in letras // true
console.log( letras.hasOwnProperty("a")  ) // true
console.log (  Object.hasOwn(letras, "a"))  // true

const list = ["oscar", "David", "Ana"]
console.log(list.includes("Oscar"))