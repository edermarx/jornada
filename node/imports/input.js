const stdin = process.openStdin();

stdin.addListener('data', (d) => {
  console.log(d.toString().trim());
});