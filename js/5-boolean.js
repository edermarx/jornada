const a = true;
const b = false;

console.log(3 > 5); // false

// =============== Falsy e Truthy =============== //

// ---------- Falsy ---------- //

let c = false;
c = 0;
c = '';
c = null;
c = undefined;
c = NaN;

if(c){
  console.log('true');
}

// ---------- Truthy ---------- //
// Todo o resto

c = true;
c = 6;
c = -1;
c = 'yay';
c = [];
c = {};

if(c){
  console.log('true'); // true
}

// truthy ou falsy?
console.log(!!c); // true