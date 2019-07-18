// ========== Operadores de incremento e decremento ========== //

let a = 1;

a += 3;
console.log(a); // 4

a -= 2;
console.log(a); // 2

a *= 5;
console.log(a); // 10

a /= 2;
console.log(a); // 5

a++;
console.log(a); // 6

++a;
console.log(a); // 7

a--;
console.log(a); // 6

// =============== Operador Spread =============== //

console.log(Math.min(5, 1, 3, 7)); // 1
console.log(Math.min(...[5, 1, 3, 7])); // 1

// =============== Operadores ternários =============== //


const b = a > 5 ? 'mais que cinco' : 'menos que cinco';
console.log(b); // 'mais que cinco'

const c = 0;
const d = c ? 's' : 'n';

console.log(d); // 'n'