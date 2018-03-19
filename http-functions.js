var https = require('https');

module.exports = function getHTML (options, callback) {

    https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log(data.concat('\n'));
    });

    response.on('end', function(data) {
      var outputData = "";
      console.log(outputData);
    });
  });
};

