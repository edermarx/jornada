const a = new Date();

console.log(a);

const b = new Date(1563326920611);
console.log(b);

const c = new Date(2019, 6, 16, 22, 30, 30, 30);
console.log(c);

const d = new Date('Tue Jul 16 2019 22:31:11 GMT-0300 (-03)');
console.log(d.getTime());

console.log(a.getTime());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getMilliseconds());