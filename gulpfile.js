var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function()
{
  console.log("Fantastic");
});

gulp.task('html', function(){

  console.log("html function");
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });
});


gulp.task('watch', function(){

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});

gulp.task('styles', function(){

return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
.pipe(gulp.dest('./app/temp/styles/'));


});
