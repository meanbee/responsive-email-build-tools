var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var SRC = 'src/',
    DEST = 'dest/';

var onError = function (error) {
    plugins.util.beep();
    console.log(plugins.util.colors.red(error));
    this.emit('end');
};

gulp.task('default', ['sass', 'inline'], function () {});

gulp.task('watch', function() {
    gulp.watch(SRC + '**/*.scss', ['sass']);
});

gulp.task('inline', function() {
    return gulp.src(SRC + '**/*.html')
        .pipe(plugins.inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: false,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('sass', function () {
    return gulp.src(SRC + '**/*.scss')
        .pipe(plugins.plumber({
            errorHandler: onError
        }))
        .pipe(plugins.sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest(SRC));
});

