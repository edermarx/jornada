const a = 'Frase aleatória';

console.log(a.length); // 15

console.log(a.indexOf('F')); // 0
console.log(a.indexOf('a')); // 2
console.log(a.indexOf('e a')); // 4
console.log(a.indexOf('frase')); // -1

console.log(a.substring(3, 7)); // se a
console.log(a.substr(3, 7)); // se alea

console.log(a.toUpperCase()); // FRASE ALEATÓRIA
console.log(a.toLowerCase()); // frase aleatória

console.log(a.split('')); // [ 'F', 'r', 'a', 's', 'e', ' ', 'a', 'l', 'e', 'a', 't', 'ó', 'r', 'i', 'a' ]
console.log(a.split(' ')); // ['Frase', 'aleatória']
console.log(a.split('a')); // [ 'Fr', 'se ', 'le', 'tóri', '' ]