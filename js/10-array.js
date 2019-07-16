const a = [1, 2, 3, 4];
const b = [1, 'yay', [1, 2]];

console.log(a[0]); // 1
console.log(b[2]); // [ 1, 2 ]
console.log(b[2][1]); // 2

console.log(b.length); // 3

// ---------- for's ---------- //

for (let i = 0; i < a.length; i++) {
  console.log(a[i]); // 1, 2, 3, 4
}

for(item of b){
  console.log(item); // 1, yay, [ 1, 2 ]
}

a.forEach((item) => {
  console.log(item); // 1, 2, 3, 4
});

console.log(typeof a); // object

const c = 3;

console.log(Array.isArray(b)); // true
console.log(Array.isArray(c)); // false