const soma = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};

soma(3, 7); // 3 + 7 = 10

const somaReturn = (a, b) => {
  return a + b;
};

const resultSoma = somaReturn(5, 6);
console.log(resultSoma); // 11

const myIndexOf = (array, ocorrencia) => {
  let result = -1;
  array.forEach((each, i) => {
    if (each === ocorrencia) result = i;
  });
  return result;
};

console.log(myIndexOf([1, 3, 4, 5], 4)); // 2

function myMin(...numeros) {
  let min = Infinity;
  numeros.forEach((numero) => {
    if (numero < min) min = numero;
  });
  return min;
}

const myOtherMin = function(...numeros) {
  return numeros.sort((a, b) => {
    return a > b ? 1 : -1;
  })[0];
};

console.log(myMin(3, 5, 21, 7)); // 3
console.log(myOtherMin(3, 5, 21, 7)); // 3

String.prototype.replaceAll = function (ocorrencia, substituto) {
  return this.split(ocorrencia).join(substituto);
};

const a = 'todos os dias';
const b = a.replaceAll('o', 'a');
console.log(b); // tadas as dias
