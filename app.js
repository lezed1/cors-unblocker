var express = require('express');
var request = require('request');
var cors = require('cors');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/get', function(req, res) {
  request(req.param("url"), function (error, response, body) {
  	if (!error && response.statusCode == 200) {
  		res.send(body);
  	}
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});