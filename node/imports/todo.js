const fs = require('fs');

const item = process.argv[2];

if (item === '-r') {
  fs.readFile('./db.txt', { encoding: 'utf-8' }, (err, data) => {
    console.log(data);
  });
  return;
}

fs.appendFile('./db.txt', item + '\n', (err) => {
  if(err) console.log(err);
});