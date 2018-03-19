var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

    https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log(data.concat('\n'));
    });

    response.on('end', function(data) {
      var outputData = [];
      console.log(outputData.push(data));
    });
  });
}

getAndPrintHTML();