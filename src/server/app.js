// importing express
var express = require('express');
var bodyParser = require('body-parser');

//assigning express to app varaible
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// parse application/json
app.use(bodyParser.json())

//listening to default page.
app.get('/', function(request, response) {
	response.send('Hello World.!');
});

//listening to port and when port is ready to serve request logging message.
app.listen(3000, function() {
	console.log('Listening on port 3000');
});