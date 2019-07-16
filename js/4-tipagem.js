// =============== Tipagem Fraca =============== //

console.log(3 * '45'); // 135

console.log(3 + '45'); // 345

console.log(true + 2); // 3

console.log(true + '2'); // true2

console.log([5] + 3); // 53

console.log(3 / 'a'); // NaN

// =============== Tipagem dinâmica =============== //

let a = 3;
console.log(typeof a); //number

a = 'yay';
console.log(typeof a); // string

a = {
  b: [1, 3, 4],
};
console.log(typeof a); // object

a = (nome) => {
  console.log(nome);
};
console.log(typeof a); // function