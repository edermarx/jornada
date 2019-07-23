const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const newFile = (file) => {
  const num = +file.split('-')[0];
  const letter = String.fromCharCode(num + 96);
  return file.replace(num, 'a' + letter);
};

fs.readdir(__dirname, (err, files) => {
  files.forEach((file) => {
    exec(`mv ${path.join(__dirname, file)} ${path.join(__dirname, newFile(file))}`);
  });
});