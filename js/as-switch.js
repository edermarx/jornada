const a = 4;
let a_string;

switch (a) {
  case 1:
    a_string = 'um';
    break;
  case 2:
    a_string = 'dois';
    break;
  case 3:
    a_string = 'três';
    break;
  case 4:
    a_string = 'quatro';
    break;
  case 5:
    a_string = 'cinco';
    break;

  default:
    a_string = 'nda';
    break;
}

console.log(a_string);