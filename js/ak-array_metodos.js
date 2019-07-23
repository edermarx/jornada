const a = [3];

a.push(4);
a.push('yay');

console.log(a); // [ 3, 4, 'yay' ]

a.pop();

console.log(a); // [ 3, 4 ]

a.shift();

console.log(a); // [ 4 ]

a.unshift(7 + 13);

console.log(a); // [ 20, 4 ]

a.push(6, 23, 2, '7'); // [ 20, 4, 6, 23, 2, '7']
a.splice(2, 3);

console.log(a); // [ 20, 4, '7' ]

const b = ['yay', 'uau'];

const c = b.concat(a);

console.log(c); // [ 'yay', 'uau', 20, 4, '7' ]

console.log(c.join('')); // yayuau2047

const d = c.join(' ');

console.log(d); // yay uau 20 4 7

// substituir todas as ocorrências
console.log(d.split(' ').join('-')); // yay-uau-20-4-7