// importing express
var express = require('express');

//assigning express to app varaible
var app = express();

//listening to default page.
app.get('/', function(request, response) {
	response.send('Hello World');
});

//listening to port and when port is ready to serve request logging message.
app.listen(3000, function() {
	console.log('Listening on port 3000');
});