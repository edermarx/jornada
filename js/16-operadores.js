// Operadores aritméticos

console.log(3 + 5); // 8
console.log(3 - 5); // -2
console.log(3 * 5); // 15
console.log(3 / 5); // 0.6
console.log(3 ** 5); // 243

console.log(3 % 5); // 3

const a = [1, 2, 4, 5, 10, 14];
a.forEach((each) => {
  console.log(each % 2); // 1, 0, 0, 1, 0, 0
  console.log(each % 5); // 1, 2, 4, 0, 0, 4
});

// Operadores de comparação

console.log(3 > 5); // false
console.log(3 < 5); // true
console.log(3 <= 3); // true
console.log(3 >= 3); // true

// comparação de valor
console.log(3 == 3); // true
console.log(true == 1); // true
console.log(true == 2); // false
console.log([] == 1); // false
console.log(false == ''); // true
console.log(false == []); // true
console.log(35 == '35'); // true
console.log([3] == '3'); // true

// comparação de valor e tipo
console.log(true === 1); // false
console.log(true === 2); // false
console.log([] === 1); // false
console.log(false === ''); // false
console.log(false === []); // false
console.log(35 === '35'); // false
console.log([3] === '3'); // false

console.log(3 === 3); // true
console.log('s' === 's'); // true
console.log([2] === [2]); // false