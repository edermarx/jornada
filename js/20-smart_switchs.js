const numeros = [1, 2, 3, 4, 5];
const num_strings = ['um', 'dois', 'três', 'quatro', 'quinta'];

const a = 2;
const a_string = num_strings[numeros.indexOf(a)];

console.log(a_string);

// ========================= //

const nums = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
};

const b = 1;
const b_string = nums[b];

console.log(b_string);