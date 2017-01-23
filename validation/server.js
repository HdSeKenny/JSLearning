const express = require('express');
const fs = require('fs'); // files system
const path = require('path');
const bodyParser = require('body-parser');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const configs = require('./configs');
const logger = require('morgan');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const ObjectID = require('mongodb').ObjectID;
const server = express();

server.use(express.static(path.join(__dirname, '/'))) // Join static files (css/js) to server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(logger('dev'));

// Connect session db, if session is not available, create
// a new session db
// MongoClient.connect(configs.session, (err, db) => {
//   const Test = db.collection('test');
//   Test.insertOne({ text: 'Hello World'}, (err, result) => {
//     if (err) {
//       console.log('Create session fail');
//     }
//     db.close();
//   })
// })

const MongoStore = connectMongo(session);
server.use(session({
  secret: 'secret',
  store: new MongoStore(configs.session),
  resave: false,
  saveUninitialized: false
}));

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
  MongoClient.connect(configs.mongoUri, (err, db) => {
    if (err) throw err;
    const User = db.collection('users');
    User.findOne({ _id: ObjectID(req.session.uId) }, (err, user) => {
      if (err) throw err;
      if (user) {
        res.status(200).json(user);
      } else {
        res.sendStatus(404);
      }
    })
  })
});


server.post('/validate', (req, res) => {
  const { username, password } = req.body;
  MongoClient.connect(configs.mongoUri, (err, db) => {
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

server.listen(configs.serverPort, (err) => {
  if (err) {}
  console.log(`Application is running on http://localhost:${configs.serverPort}`);
})


server.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  MongoClient.connect(configs.mongoUri, (err, db) => {
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
              userObj.msg = 'Register success';
              req.session.uId = userObj.user._id;
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
