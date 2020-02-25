const gulp = require("gulp")
const uglify = require("gulp-uglify")
const minifyCss = require("gulp-minify-css")
const minifyHtml = require("gulp-minify-html");
const prefix = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const fs = require('fs')

gulp.task('clean', function() {
	fs.exists("dist", function(exists) {
		if(!exists) {
			fs.mkdirSync("dist");
		}
	})
	return gulp.src('./dist/*').pipe(clean())
})

gulp.task('miniJs', function() {
	return gulp.src(['./project/static/js/*/common.js','./project/static/js/*.js']).pipe(uglify()).pipe(gulp.dest('./dist/static/js'));
})

gulp.task("miniCss",function() {
	return gulp.src(["./project/static/css/*/common.css","./project/static/css/*.css"]).pipe(prefix({
			overrideBroserslist: ["last 5 version","iOS > 3","Firefox > 2","Google > 30"]
		})).pipe(minifyCss()).pipe(gulp.dest("./dist/static/css"));
})

gulp.task("miniHtml",function() {
	return gulp.src("./project/*.html").pipe(minifyHtml()).pipe(gulp.dest("./dist"));
})

gulp.task("miniComponent",function() {
	return gulp.src("./project/component/*.html").pipe(minifyHtml()).pipe(gulp.dest("./dist/component"));
})

gulp.task('default', gulp.series('clean', gulp.parallel('miniJs', 'miniCss', 'miniHtml', 'miniComponent')));
