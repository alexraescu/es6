var gulp = require('gulp');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var gutil = require('gutil');

gulp.task('copy', function() {
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './build'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['copy']);
    gulp.watch('src/**/*.js', ['transpile']);
});

gulp.task('transpile', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('default', ['copy', 'transpile', 'browserSync', 'watch']);
