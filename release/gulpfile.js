
const gulp = require('gulp');
const concat = require('gulp-concat');

const jsFiles = [
    './src/Framework/*.js',
];

function concatJs() {
  return gulp.src(jsFiles)
    .pipe(concat('trackerEngine.js'))
    .pipe(gulp.dest(['dist/release/']));
}

exports.default = concatJs;
