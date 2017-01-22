const express = require('express');
const fs = require('fs'); // files system
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const user = { username: 'Kenny', password: 'kenny' };
const MongoClient = require('mongodb').MongoClient;

const MongoUrl = 'mongodb://localhost/JSLearning';

server.use(express.static(path.join(__dirname, '/'))) // Join static files (css/js) to server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.route('/')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
  })

server.route('/home')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/home.html`));
  })
server.route('/register')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/register.html`));
  })

server.post('/register', (req, res) => {
  MongoClient.connect(MongoUrl,(err, db) => {
    const User = db.collection('JSLearning');
    User.find().toArray((err, user)=>{
      if(err){
        res.send(500);
        return;
      }
      else {
        if(req.body.newUsername === user[0].username){
           res.status(200).json("This username have existed!");
        }
      }
    })
  })
  
})

server.get('/json', (req, res) => {
  // When client get '/text', the server will receive the http request
  // Get the data from local files
  fs.readFile('./files/scopes.json', 'utf8', (err, data) => {
    res.status(200).json(data);
  });
});

server.post('/validate', (req, res) => {
  const userObj = { user:null, msg: '' };
  if (req.body.username === user.username) {
    if (req.body.password === user.password) {
      userObj.user = user;
      userObj.msg = 'Login success!'
      res.status(200).json(userObj);
    } else {
      userObj.msg = 'Invalid password';
      res.status(200).json(userObj);
    }
  } else {
    userObj.msg = 'This user is not registered!';
    res.status(200).json(userObj);
  }
})

server.listen(8000, (err) => {
  if (err) {}
  console.log('Application is running on http://localhost:8000');
})


// server.post('/register', (req,res) => {
//      if(req.body.username===user.username){
//          res.status(200).json("This username have existed!");
//      }
// })








