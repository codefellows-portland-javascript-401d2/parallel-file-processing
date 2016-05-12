const gulp = require('gulp');                               // requiring gulp
const eslint = require('gulp-eslint');                      // requiring eslint
const mocha = require('gulp-mocha');                        // requiring mocha

gulp.task('lint', () => {                                   // sets 'lint' task
    return gulp.src(['**/*.js', '!node_modules/**'])        // will run task on any JS file in this directory or any within it; will not run on any JS files in node_modules folder
    .pipe(eslint())                                         // runs eslint on the aforementioned files
    .pipe(eslint.format())                                  // sets the 'format' output style, default is 'stylish'
    .pipe(eslint.failAfterError());                         // sets the tests to fail if there was an error
});

gulp.task('run-tests', () => {                              // sets 'run-tests' task
    return gulp.src('./test/**/*.js', {read:false})        // will run task on any JS file in the tests directory; NOTE: not sure what read:false does
    .pipe(mocha({reporter:'dot'}));                         // runs mocha on the aforementioned files; uses 'dot' reporter for formatting (minimal output).
});

gulp.task('watch-js', () => {                               // sets 'watch-js' task
    gulp.watch(['**/*.js', '!node_modules/**'], ['test']);  // will watch all JS files in this directory or any within it for changes and will then run 'test' task; will not run on any JS files in node_modules folder
});

gulp.task('test', ['lint', 'run-tests']);                   // 'test' task first runs 'lint' task, then runs 'run-tests' task

gulp.task('default', ['test', 'watch-js']);                 // by default, gulp will run 'test' task, will then enable the watch-js tasks to track changes.
