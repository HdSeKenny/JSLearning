const configs = {
  serverPort: 8000,
  session: {
    url: 'mongodb://localhost/jslearning-session',
    ttl: 60 * 40
  },

  mongoUri: 'mongodb://localhost/jslearning'
}


module.exports = configs;