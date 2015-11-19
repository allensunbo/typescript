var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var watch = require('gulp-watch');

gulp.task('clean', function() {
    gulp.src('dist/**/*.*')
        .pipe(clean({
            force: true
        }))
});

gulp.task('compile', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            // noImplicitAny: true,
            // out: 'app.js',
            outDir: 'dist',
            noEmitOnError: true,
            module: 'commonjs',
            // moduleResolution : 'node'
        }))

    .pipe(gulp.dest('dist'));
});

gulp.task('start', function() {
    watch('src/**/*.ts', function() {
        gulp.run('clean');
        gulp.run('compile');
    })
});
