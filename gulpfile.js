var gulp = require('gulp');

var sass = require('gulp-sass');

var uglify = require('gulp-uglify');

var minCss = require('gulp-clean-css');

var server = require('gulp-webserver');

var concat = require('gulp-concat');

var browserSync = require('browser-sync');

gulp.task('server',function(){
    return gulp.src('src')
        .pipe(server({
            port:9090,
            livereload:true
        }))

    // return browserSync({
    //     server:{
    //         baseDir:'src',
    //         middleware:function(req,res,next){

    //         }
    //     },
    //     port:9090,
    //     files:['src']
    // })
})

gulp.task('devCss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(minCss())
    .pipe(gulp.dest('./src/css'))
})