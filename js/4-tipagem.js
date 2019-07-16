// =============== Tipagem Fraca =============== //

console.log(3 * '45'); // 135

console.log(3 + '45'); // 345

console.log(true + 2); // 3

console.log(true + '2'); // true2

console.log([5] + 3); // 53

// =============== Tipagem dinâmica =============== //

let a = 3; // Number

a = 'yay'; // String

a = { // Object
  b: [1, 3, 4],
};

a = (nome) => { // Function
  console.log(nome);
};