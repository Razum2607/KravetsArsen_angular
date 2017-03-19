var gulp = require('gulp'),
	less = require('gulp-less'),
	connect = require('gulp-connect');

var lessPath = 'app/*.less',
	cssPath = 'app/',
	htmlPath = ['app/**/*.html', 'app/*.html'];

gulp.task('connect', function() {
	connect.server({
		root: '.',
		port: 8000,
		livereload: true
	});
});

gulp.task('less', function() {
	gulp.src(lessPath)
	.pipe(less())
	.pipe(gulp.dest(cssPath))
	.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src(htmlPath)
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(lessPath, ['less']);
	gulp.watch(htmlPath, ['html']);
});

gulp.task('default', ['less', 'watch', 'connect']);