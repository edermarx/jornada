const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const newFile = (file, i) => {
  const letters = +file.split('-')[0];
  console.log(letters - i);
  // return file.replace((letters[0] === 'a' ?  '0' : letters[0] === 'b' ? '1' : letters[0]) + (+letters[1].charCodeAt() - 96));
};

fs.readdir(__dirname, (err, files) => {
  files.forEach((file, i) => {
    newFile(file, i);
    // exec(`mv ${path.join(__dirname, file)} ${path.join(__dirname, newFile(file))}`);
  });
});