const request = require('request');
const prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['from', 'dipshit'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  from: ' + result.from);
    console.log('  dipshit: ' + result.dipshit);
    var meep = 'https://www.foaas.com/donut/';
    meep += result.dipshit;
    meep += "/"
    meep += result.from;
    request.get({
        headers: {
          'Accept': 'application/json'
        },
        uri: meep,
        method: 'GET'
      }, function (err, res, body) {
          data = JSON.parse(body)
          console.log(data['message'])
      });
  });



/*
request.get({
    headers: {
      'Accept': 'application/json'
    },
    uri: 'https://www.foaas.com/donut/Asic/Neumann',
    method: 'GET'
  }, function (err, res, body) {
      data = JSON.parse(body)
      console.log(data['message'])
  });
*/
