var gulp = require('gulp');
var markdown = require('gulp-markdown');
var tap = require('gulp-tap');
var Handlebars = require('Handlebars');
var path = require('path');

gulp.task('default', function() {
  return gulp.src('index.hbs')
    .pipe(tap(function(file) {

      var template = Handlebars.compile(file.contents.toString());

      return gulp.src('views/**.md')
        .pipe(markdown())
        .pipe(tap(function(file) {
          var data = {
            contents: file.contents.toString(),
            endpoint: path.basename(file.path)
          };

          var html = template(data);
          file.contents = new Buffer(html, "utf-8");
        }))
        .pipe(gulp.dest('build/pages'));
    }));
});


