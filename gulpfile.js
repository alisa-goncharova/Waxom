const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const tmp = 0; // переменная для удаленная при следующем коммите


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