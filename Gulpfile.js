'use strict';

var gulp    = require('gulp')
  , phpunit = require('gulp-phpunit')
  ;

// phpunit
gulp.task('phpunit', function() {
  gulp.src('phpunit.xml').pipe(phpunit('', {
    'testdox':true
  }));
});

// run tasks on (all) file change
gulp.task('default', function() {
  gulp.watch(["app/**/*.php", "tests/**/*.php"], ['phpunit']);
});