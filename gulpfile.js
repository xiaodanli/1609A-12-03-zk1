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

//开发环境css
gulp.task('devCss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(minCss())
    .pipe(gulp.dest('./src/css'))
})

//js
gulp.task('devJs',function(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/js/minJs'))
})

//监听
gulp.task('watch',function(){
    gulp.watch('./src/scss/*.scss',gulp.series('devCss'))
    gulp.watch('./src/js/*.js',gulp.series('devJs'))
})

gulp.task('default',gulp.series('devCss','devJs','server','watch'))
