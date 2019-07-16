// =============== Outras bases =============== //

const a = 47;

console.log(a.toString(2)); // 101111
console.log(a.toString(3)); // 1202
console.log(a.toString(8)); // 57
console.log(a.toString(10)); // 47
console.log(a.toString(16)); // 2f
console.log(0x2f); // 47

// =============== Number() =============== //

console.log(Number(true)); // 1
console.log(Number('5')); // 5
console.log(+'5'); // 5

// =============== parseInt() e parseFloat() =============== //

console.log(parseInt(3.1)); // 3
console.log(parseInt('3.9')); // 3
console.log(parseFloat('4.890567')); // 4.890567
console.log(parseFloat('4.890567').toFixed(3)); // 4.891

// =============== Math =============== //

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

console.log(Math.floor(4.56)); // 4
console.log(Math.ceil(4.56)); // 5
console.log(Math.round(4.56)); // 5

console.log(Math.sqrt(64)); // 8
console.log(Math.sin(Math.PI / 2)) // 1

console.log(Math.min(9, 2, 5, 8)); // 2
console.log(Math.max(9, 2, 5, 8)); // 9

// =============== Math.random() =============== //

console.log(Math.random()); // número entre 0 e 1

console.log(Math.floor(Math.random() * 5)); // inteiro entre 0 e 4


