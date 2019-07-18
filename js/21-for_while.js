for(let i = 0; i < 5; i++){
  console.log(i); // 0, 1, 2, 3, 4
}

const a = [2, 4, 8, 5, 3];

let result = -1;
for (let i = 0; i < a.length; i++) {
  if(a[i] === 5) result = i;
}
console.log(result); // 3

let j = 0;
while(j < 5){
  console.log(j); // 0, 1, 2, 3, 4
  j++;
}