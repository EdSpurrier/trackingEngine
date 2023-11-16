
const gulp = require('gulp');
const concat = require('gulp-concat');

const jsFiles = [
    './src/trackingPoint.js',
    './src/targetPoint.js',
    './src/gameEngine.js'
];

function concatJs() {
  return gulp.src(jsFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/release'));
}

exports.default = concatJs;
