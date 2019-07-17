const a = 3;

const b = a.toString();
console.log(b); // '3'

const c = `${a}`;
const d = a + '';

console.log(c); // '3'
console.log(d); // '3'

const e = '345';

const f = Number(e);
console.log(f); // 345

const g = +e;
console.log(g); // 345

const h = [1, 2, 3];
console.log(h.toString()); // 1,2,3
console.log(JSON.stringify(h)); // [1,2,3]

const i = {
  a: 3,
  b: [1, 2],
};

console.log(i.toString()); // [object Object]
console.log(JSON.stringify(i)); // {"a":3,"b":[1,2]}