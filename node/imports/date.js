const myDate = new Date().getTime();
const otherDate = new Date().getTime();

const print = require('./print');

module.exports = {
  myDate,
  otherDate: 'now',
  print,
};