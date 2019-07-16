const a = 'Isso é uma string!';
const b = 'a';
const c = "Aspas duplas";
const d = `Crase`;

console.log("I don't know"); // I don't know
console.log('I don\'t know'); // I don't know

// =============== Concatenação =============== //

const nome = 'Eder';
const sobrenome = 'Marques';
const idade = 23;

console.log('Meu nome é ' + nome + ' ' + sobrenome); // Meu nome é Eder Marques
console.log('Tenho ' + idade + ' anos'); // Tenho 23 anos

// =============== Interpolação =============== //

console.log(`Meu nome é ${nome} ${sobrenome}`); // Meu nome é Eder Marques
console.log(`Tenho ${idade} anos`); // Tenho 23 anos

console.log(`2³ = ${2 ** 3}`); // 2³ = 8