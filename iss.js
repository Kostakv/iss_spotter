const request = require('request');

const fetchMyIP = function(callback) { 
  var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});
var options = { method: 'GET',
  url: `https://geo.ipify.org/api/v2/country?apiKey=YOUR_API_KEY&ipAddress=65.94.90.138` };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      const data = JSON.parse(body);
      console.log(data);
      console.log(data);
      
      
    
    });
}




module.exports = { fetchMyIP };