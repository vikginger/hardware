var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch('./less/**/*.less', styles);
  gulp.watch("./*.html").on('change', browserSync.reload);
}

function styles() {
  return gulp.src('./less/style.less')
    .pipe(less())
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

gulp.task('styles', styles);
gulp.task('serve', gulp.series(serve, 'styles'));
