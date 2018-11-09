var gulp = require('gulp'), //引用gulp plugin
    gulpUglify = require('gulp-uglify'), //壓縮
    gulpConcat = require('gulp-concat'), //合併JS
	gulpSass = require('gulp-sass'), //編譯sass
	gulpImagemin = require('gulp-imagemin'); //壓縮圖片

gulp.task('script',function(){	//定義名稱為script的gulp工作
	gulp.src('js/*.js')	//要處理的原始JS目錄
		.pipe(gulpConcat('all.js')) //合併成的檔案名稱
		.pipe(gulpUglify()) //將JS壓縮
		.pipe(gulp.dest('js/minify')); //輸出的路徑
});

gulp.task('watch',function(){	//監控
	gulp.watch('js/*.js',['script']);
	gulp.watch('scss/*.scss',['style']);
});

gulp.task('image', function () { //圖片壓縮
    gulp.src('img/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('img'));
});

gulp.task('style',function(){ //自動編譯sass
	gulp.src('scss/*.scss')
		.pipe(gulpSass())
		.pipe(gulp.dest('css'));
});



gulp.task('default', ['script','style','watch']);