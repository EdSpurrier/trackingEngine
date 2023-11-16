
const gulp = require('gulp');
const concat = require('gulp-concat');

const jsFiles = [
    './src/htmlInjector.js',
    
    './src/systemEngine.js',
    './src/teacherEngine.js',
    './src/userInterface.js',
    './src/trackingPoint.js',
    './src/targetPoint.js',
    './src/gameEngine.js',
];

function concatJs() {
  return gulp.src(jsFiles)
    .pipe(concat('trackerEngine.js'))
    .pipe(gulp.dest('release/js'));
}

exports.default = concatJs;
