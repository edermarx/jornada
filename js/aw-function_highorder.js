const imprimirResultado = (funcao, ...args) => {
  console.log('=========================');
  console.log(funcao(...args));
  console.log('=========================');
};


const epochTime = () => new Date().getTime();

// função que retorna uma função
const maiuscula = texto => (() => texto.toUpperCase());

const minuscula = texto => texto.toLowerCase();

imprimirResultado(epochTime);
imprimirResultado(maiuscula('Eder'));
imprimirResultado(minuscula, 'Eder');
imprimirResultado(num => num ** 5, 10);