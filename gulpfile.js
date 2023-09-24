const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const browserSync = require('browser-sync'); 

// sassコンパイル
gulp.task('sass', (done) => {
    gulp.src('./css/*.scss')
        .pipe(sass({
                    outputStyle: 'expanded'
                })
            )
        .on("error", sass.logError)
        .pipe(gulp.dest('./css'));
    done();
});

// リロードするhtml
gulp.task('browser-sync', (done) => {
    browserSync.init({
        server : {
            baseDir : './',
            index : 'index.html',
        },
    });
    done();
});

// リロード設定
gulp.task('browser-reload', (done) => {
    browserSync.reload();
    done();
});

// 監視ファイル
gulp.task('watch-files', (done) =>  {
    gulp.watch("./*.html", gulp.task('browser-reload'));
    gulp.watch("./css/*.css", gulp.task('browser-reload'));
    gulp.watch("./css/*.scss", gulp.task('sass'));
    gulp.watch("./js/*.js", gulp.task('browser-reload'));
    done();
});

// タスク実行
gulp.task('default', gulp.series( gulp.parallel('watch-files', 'browser-sync', 'sass'), (done) => {
    done();
}));