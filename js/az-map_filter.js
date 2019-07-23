const a = [3, 5, 4, 2, 1, 14];

const b = a.map((each) => {
  return each * 2;
});

console.log(a); // [ 3, 5, 4, 2, 1, 14 ]
console.log(b); // [ 6, 10, 8, 4, 2, 28 ]

const c = a.filter((each) => {
  return each % 2 === 0;
});

console.log(c); // [ 4, 2, 14 ]