
const gulp = require('gulp');
const concat = require('gulp-concat');

const jsFiles = [
    './src/htmlInjector.js',
    './src/systemEngine.js',
    './src/teacherEngine.js',
    './src/trackingEngine.js',
    './src/sceneEngine.js',
    './src/motionTracker.js',
    './src/triggerZone.js',
];

function concatJs() {
  return gulp.src(jsFiles)
    .pipe(concat('trackerEngine.js'))
    .pipe(gulp.dest('release/js'));
}

exports.default = concatJs;
