const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  neo4j: {
    user: process.env.NEO4JUSER,
    password: process.env.NEO4JPASSWORD,
    uri: process.env.NEO4JURI
  }
};
