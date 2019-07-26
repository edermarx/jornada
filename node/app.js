const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const users = ['fejwfklew', 'fejfewwfklew', 'ew'];

app.use('/views', express.static('views'));

app.get('/:username', (req, res) => {
  res.send(req.params.username);
  // res.sendFile(path.join(__dirname, './views/index.html'));
});

app.post('/', (req, res) => {
  res.send(req.body.test);
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