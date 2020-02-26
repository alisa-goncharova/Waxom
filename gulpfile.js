const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

function style() {
	return gulp.src('./src/sass/style.sass')
			.pipe(sass())
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.stream());
}

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});


gulp.task('default', style);