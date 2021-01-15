const request = require('request');

module.exports = function (site) {
  request(site, function (err, response, body) {
    console.log('error:', err);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
};

//> curl http://www.google.com -UseBasicParsing
