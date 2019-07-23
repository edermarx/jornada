const iterarDevagar = (array, funcao, i = 0) => {
  if (!array[i]) return; // condição de parada
  funcao(array[i]);
  setTimeout(() => {
    iterarDevagar(array, funcao, i + 1);
  }, 1000);
}


const frutas = ['morango', 'ameixa', 'laranja'];

iterarDevagar(frutas, (fruta) => {
  console.log(fruta.toUpperCase());
});

const fatorial = (num) => {
  if(num <= 0) return 0;
  if (num === 1) return 1; // condição de parada
  return num * fatorial(num - 1);
}

console.log(fatorial(6));