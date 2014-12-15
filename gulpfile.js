var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var SRC = 'src/',
    DEST = 'dest/';

gulp.task('default', function() {
    gulp.watch(SRC + '**/*.scss', ['sass']);
});

gulp.task('inline', function() {
    return gulp.src(SRC + '**/*.html')
        .pipe(plugins.inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('sass', function () {
    return gulp.src(SRC + '**/*.scss')
        .pipe(plugins.sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest(SRC));
});

