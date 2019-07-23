console.log('yay');
setTimeout(() => {
  console.log('yay + 2 segundos');
}, 2000);

setInterval(() => {
  console.log(new Date().getSeconds());
}, 1000);
