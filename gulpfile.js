var gulp = require('gulp');
// var sass = require("gulp-sass");

gulp.task('copy-index',function(){
	gulp.src("*.html")
    .pipe(gulp.dest("D:/phpStudy/WWW/6"));
});

// gulp.task("sass",function(){
// 	gulp.src("sass/*.scss")
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:/phpStudy/WWW/6/css1"))
// });

gulp.task("copy-img",function(){
	gulp.src("img/*.{jpg,png,gif,ico}")
	.pipe(gulp.dest("D:/phpStudy/WWW/6/img"));
});

gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/6/php"));
});

gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/6/js"));
});

gulp.task("font",function(){
	gulp.src("font/*.{eot,svg,ttf,woff}")
	.pipe(gulp.dest("D:/phpStudy/WWW/6/font"));
});

gulp.task("css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/6/css"));
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*.{jpg,png,gif}",["copy-img"]);
	gulp.watch("css/*.css",["css"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("php/*.php",["php"]);
	gulp.watch("font/*.{eot,svg,ttf,woff}",["font"]);
	// gulp.watch("sass/*.scss",["sass"]);
});