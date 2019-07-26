const express = require('express');

const app = express();

const users = ['fejwfklew', 'fejfewwfklew', 'ew'];

app.get('/', (req, res) => {
  res.send('<h1>yay</h1>');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/ip', (req, res) => {
  res.send(`Seu ip é ${req.ip}`);
});

app.listen(3000, () => {
  console.log('READY');
});