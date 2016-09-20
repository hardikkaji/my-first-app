var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('./gulp.config')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/**
 * Gulp Tasks mapping
 */
gulp.task('serve', serve);
gulp.task('default', ['serve']);
gulp.task('browser-sync', startBrowserSync);

///////////////////

function serve() {
	// starting node server
	startNodemon(getNodemonConfig());
	// watch file changes if change then reload browser
	gulp.watch('./src/**/*.*', browserSync.reload);
}

function getNodemonConfig() {
	// nodemon configuration
	return {
		script: config.server + 'app.js', // server start file
		watch: ['./src/**/*.*'], // reload app if those files are changed.
		ext: 'html js' // watch extensions
	};
}

// starts nodemon server by passing configuration
function startNodemon(nodeConfig) {
	// starting nodemon server
	nodemon(nodeConfig)
		.on('start', function() {
			console.log('**** gulp-nodemon started.!');
			startBrowserSync();
		})
		.on('restart', function() {
			console.log('**** Server restarted.!');
			setTimeout(function () {
				reload({ stream: false });
			}, 1000);
		});
}

// starts browser-sync
function startBrowserSync() {
	// browser sync configuration
	var browserSyncConfig = {
		proxy: "localhost:3000",  // local node app address
		port: 5000,  // use *different* port than above
		notify: true
	};
	// starting browser sync and watch for changes
	browserSync(browserSyncConfig);
}
