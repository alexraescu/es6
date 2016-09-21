var gulp = require('gulp');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

gulp.task('copy', function() {
    gulp.src('src/index.html')
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
    gulp.watch('src/index.html', ['copy']);
    gulp.watch('src/**/*.js', ['transpile']);
});

gulp.task('transpile', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean', 'copy', 'browserSync', 'watch']);
