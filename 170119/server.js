const express = require('express');
const path = require('path');
const config = require('./configs');
const fs = require('fs'); // file systems, used for read local files
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
server.use(bodyParser.json()); // parse application/json
server.use(express.static(path.join(__dirname, '/'))) // Join static files (css/js) to server

server.route('/')
  .get((req, res) => { // When get '/', go to index.html
    res.sendFile(path.join(`${__dirname}/index.html`));
  });

server.get('/text', (req, res) => {
  // When client get '/text', the server will receive the http request
  // Get the data from local files
  fs.readFile('./files/scopes.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    // else if (data.active === 'false') {
    // 	console.log("ho");
    //   const obj = JSON.parse(data);
    //   console.log(obj);
    // }
    else
    	const obj = JSON.parse(data);
  });
});

server.post('/validate', (req, res) => {
  // put your code here

})

server.listen(config.port, () => {
  console.log(`Application is running at ${config.port}`);
});
