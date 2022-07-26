// console.log('hola mundo')

let a = 10;
// var sigue siendo válida pero es recomendable usar let porque limita el scope de la variable
var b = 20;
const c = 30;
const d = 'Spiderman';
// Enmarcar entre paréntesis para saber que variable está imprimiendo junto con su valor

console.log({ a }); // {a: 10}
console.log({ b }); // {b: 20}
console.log({ c }); // {c: 30}

console.table({ a, b, c, d }
// (índice)	Valor
// a					10
// b					20
// c					30
// d					'Spiderman')