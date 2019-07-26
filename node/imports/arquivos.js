const fs = require('fs');

fs.writeFile('./exemplo.txt', 'uau', (err) => {
  if(err) console.log(err);
  fs.appendFile('./exemplo.txt', 'fewfwe', (err) => {
    if(err) console.log(err);
    fs.readFile('./exemplo.txt', {encoding: 'utf-8'},(err, data) => {
      console.log(data);
    });
  });
});

