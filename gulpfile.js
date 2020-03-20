'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () =>{
    return gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', () =>{
    gulp.watch('./src/css/*.scss', gulp.series('sass'));
});