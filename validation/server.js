const express = require('express');
const fs = require('fs'); // files system
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
// const user = { username: 'Kenny', password: 'kenny' };

const MongoClient = require('mongodb').MongoClient;
const MongoUrl = 'mongodb://localhost/jslearning';

const assert = require('assert');


server.use(express.static(path.join(__dirname, '/'))) // Join static files (css/js) to server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.route('/')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/html/index.html`));
  })

server.route('/home')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/html/home.html`));
  })

server.route('/login')
  .get((req, res) => {
    res.sendFile(path.join(`${__dirname}/html/login.html`));
  })

server.get('/json', (req, res) => {
  // When client get '/text', the server will receive the http request
  // Get the data from local files
  fs.readFile('./files/scopes.json', 'utf8', (err, data) => {
    res.status(200).json(data);
  });
});

server.get('/user', (req, res) => {
  console.log(req.body);
  MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    const User = db.collection('users');
    User.find().toArray((err, user) => {
      if (err) {
        res.send(500);
        return;
      }
      res.status(200).json(user);
    })

  })

});



server.post('/validate', (req, res) => {
  const { username, password } = req.body;
  MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    const User = db.collection('users');
    User.findOne({ username }, (err, user) => {
      // console.log(user);
      const userObj = { user: null, msg: '' };
      if (user&&req.body.username === user.username) {
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

  })

})

server.listen(8000, (err) => {
  if (err) {}
  console.log('Application is running on http://localhost:8000');
})


server.post('/register', (req, res) => {
  // const username = req.body.
  const { username, password, email } = req.body;
  // console.log(req.body);
  MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    const User = db.collection('users');
    User.findOne({ username }, (err, user) => {
      const userObj = { user: null, msg: '' };
      if (user) {
        userObj.msg = 'This username is already exist';
        res.status(200).json(userObj);
      } else {
        User.findOne({ email }, (err, user) => {
          if (user) {
            userObj.msg = 'This email has been registered';
            res.status(200).json(userObj);
          } else {
            User.insertOne(req.body, (err, result) => {
              assert.equal(err, null);
              userObj.user = result.ops[0];
              userObj.msg = 'Register success'
              res.status(200).json(userObj);
              // res.status(200).json(result.ops);
              // callback(result);

            });
          }
        })

      }
    })

  })
})
