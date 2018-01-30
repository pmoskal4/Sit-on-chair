//gulpfile.js

var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");


gulp.task("sass", function(){
   gulp.src("src/styles/**/*.scss")
       .pipe(sourcemaps.init())
       .pipe(sass({
           outputStyle: "compressed"
       }))
       .pipe(autoprefixer({
           browsers: ["last 2 versions"],
           cascade: false
       }))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("dist"))
});

gulp.task("watch", function(){
   gulp.watch("**/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "watch"]);
