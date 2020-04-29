var gulp = require('gulp');
// var minCSS = require("gulp-clean-css");

var browserSync = require('browser-sync').create();


// использование плагина на перезагрузку страницы 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});
