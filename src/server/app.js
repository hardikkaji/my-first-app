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
app.use(bodyParser.json());

app.use('/api', require('./routes.config'));
app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
//app.use(express.static('./bower_components'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// Any invalid calls for templateUrls are under app/* and should return 404
app.use('/app/*', function(req, res, next) {
	four0four.send404(req, res);
});
// Any deep link calls should return index.html
app.use('/*', express.static('./src/client/index.html'));

//listening to port and when port is ready to serve request logging message.
app.listen(3000, function() {
	console.log('Listening on port 3000');
	console.log('__dirname = ' + __dirname +
		'\nprocess.cwd = ' + process.cwd());
});
