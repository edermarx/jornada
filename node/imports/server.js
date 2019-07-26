const {createServer} = require('http');

const server = createServer((req, res) => {
  
  if(req.url === '/users'){
    // db 
    // get users 
    res.writeHead(200, {'Content-Type': 'json'});
    res.write(JSON.stringify(users));
  }

  if(req.url === '/'){
    fs.readFile('./home.html', {}, (data) => {
      res.write(data);
    });
  }

  res.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${req.url}</code></p>
  `);

  res.end();
});

server.listen(3000);
console.log('Listening! (port 3000)');