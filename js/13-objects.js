const a = {
  b: 3,
  c: 'yay',
  d: [1, 3],
  e: {
    f: 2
  }
}

console.log(a.b); // 3
console.log(a.d[1]); // 3
console.log(a.e.f); // 2

// ========== Iterar Objetos ========== //

Object.keys(a).forEach((key) => {
  console.log(key); // b, c, d, e
});

Object.values(a).forEach((value) => {
  console.log(value); // 3, yay, [ 1, 3 ], { f: 2 }
});

for(key in a){
 console.log(`${key}: ${JSON.stringify(a[key])}`);
}