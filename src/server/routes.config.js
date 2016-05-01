var router = require('express').Router();
var appRoutes = [
	'./skills'
];

///////////////////////////

// appending configured route modules to router to avail as /api/*
for (var index in appRoutes) {
	router.use(require(appRoutes[index]));
}

module.exports = router;