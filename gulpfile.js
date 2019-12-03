const gulp = require('gulp');
const browserSync = require('browser-sync').create();


gulp.task('hello', function(){
    console.log('Привет Мир');
    done();
});
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});