'use strict';
const gulp        = require('gulp');
const joesGulpTasks = require('joes-gulp-tasks');

const config      = require('./gulpconfig.js');
const tasks = {
  compile: [],
  watch: [],
  validate: [],
  clean: [],
  default: [],
};

joesGulpTasks(gulp, config, tasks);

// console.log("Tasks => ", tasks);
// console.log("Config => ", config);

gulp.task('clean', gulp.parallel(tasks.clean));
gulp.task('compile', gulp.series(
    'clean',
    gulp.series(tasks.compile)
));
tasks.validate[0] ? gulp.task('validate', gulp.parallel(tasks.validate)) : null;
gulp.task('watch', gulp.parallel(tasks.watch));
tasks.default.push('watch');
gulp.task('default', gulp.series(
    'compile',
    gulp.parallel(tasks.default)
));

