const request = require('request');
const pkg = require('../../package.json');
const conf = require('../conf');

module.exports = (options) => new Promise((resolve, reject) => {
  request(options, (err, httpResponse, body) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      httpResponse,
      body
    });
  });
});
