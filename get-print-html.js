var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
    var outputData = "";

    https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      callback(data);
    });

    response.on('end', function(data) {
      outputData += data;
      callback(outputData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML();
