const express = require('express');
const path = require('path');
const config = require('./configs');
const fs = require('fs'); // file systems, used for read local files
const bodyParser = require('body-parser');
const server = express();

const user = { username: 'Kenny'}

server.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
server.use(bodyParser.json()); // parse application/json
server.use(express.static(path.join(__dirname, '/'))) // Join static files (css/js) to server

server.route('/')
  .get((req, res) => { // When get '/', go to index.html
    res.sendFile(path.join(`${__dirname}/index.html`));
  });

server.route('/home')
  .get((req, res) => { // When get '/', go to index.html
    res.sendFile(path.join(`${__dirname}/home.html`));
  });

server.get('/text', (req, res) => {
  // When client get '/text', the server will receive the http request
  // Get the data from local files
  fs.readFile('./files/scopes.json', 'utf8', (err, data) => {
    res.status(200).json(data);
  });
});

server.get('/validate', (req, res) => {
  res.status(200).json(user);
})

server.post('/validate', (req, res) => {
  if (req.body.username === 'Kenny') {
    res.sendStatus(200).json('ok');
  } else {
    res.sendStatus(200).json('error');
  }
})

server.listen(config.port, () => {
  console.log(`Application is running at ${config.port}`);
});

