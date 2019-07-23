const pessoa = {
  nome: 'Eder',
  sobrenome: 'Marques',
  andar: () => {
    console.log('Andando...');
  },
};

console.log(pessoa.nome); // Eder
pessoa.andar(); // Andando...

pessoa.apresentar = function() {
  console.log(`Olá, sou ${this.nome} ${this.sobrenome}!`);
};

pessoa.apresentar(); // Olá, sou Eder Marques!

pessoa.mudarNome = function(nome) {
  this.nome = nome;
}

pessoa.mudarNome('João');
console.log(pessoa.nome); // João