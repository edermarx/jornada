// var vs let

// ========================== CASO 1 ========================== //

{
  var a = 0;
}

{
  let b = 0;
}

console.log(a); // 0
console.log(b); // b is not defined

// ========================== CASO 2 ========================== //

var c = 0;

var c = 0; // ok

let d = 0;

let d = 0; // Identifier 'd' has already been declared

// ========================== CASO 3 ========================== //

console.log(e); // undefined

var e = 0;

console.log(f); // f is not defined

let f = 0;

// ============================================================ //