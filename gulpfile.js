var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('./gulp.config')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', serve);

///////////////////

function serve() {
	startNodemon(getNodemonConfig());
	gulp.watch('./src/**/*.*', browserSync.reload);
}

function getNodemonConfig() {
	return {
		script: config.server + 'app.js',
		watch: ['./src/**/*.*'],
		ext: 'html js'
	};
}

function startNodemon(config) {
	nodemon(config)
		.on('start', function() {
			console.log('**** gulp-nodemon started.!');
			browserSync({
				proxy: "localhost:3000",  // local node app address
				port: 5000,  // use *different* port than above
				notify: true
			});
		})
		.on('restart', function() {
			console.log('**** Server restarted.!');
			setTimeout(function () {
				reload({ stream: false });
			}, 1000);
		});

}
