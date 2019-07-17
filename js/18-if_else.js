if(3 > 5){
  console.log('maior');
} else {
  console.log('menor'); // menor
}

// ========================= //

const a = [1, 2, 3];

if(a.length){
  a.forEach((each) => {
    console.log(each); // 1, 2, 3
  });
} else {
  console.log('Array vazio!');
}

// ========================= //

const b = 3;
let b_string;

if(b === 1){
  b_string = 'um';
} else if(b === 2) {
  b_string = 'dois';
} else if(b === 3) {
  b_string = 'três';
} else if(b === 4) {
  b_string = 'quatro';
} else if(b === 5) {
  b_string = 'cinco';
}

console.log(b_string); // três