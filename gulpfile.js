var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('./gulp.config')();

gulp.task('serve', serve);

///////////////////

function serve() {
	startNodemon(getNodemonConfig());
}

function getNodemonConfig() {
	return {
		script: config.server + 'app.js',
		ext: 'html js'
	};
}

function startNodemon(config) {
	nodemon(config)
		.on('start', function() {
			console.log('**** gulp-nodemon started.!');
		})
		.on('restart', function() {
			console.log('**** Server restarted.!');
		});

}