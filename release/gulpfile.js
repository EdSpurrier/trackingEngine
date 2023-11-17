
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
    './src/handtrack.min.js',
];

function concatJs() {
  return gulp.src(jsFiles)
    .pipe(concat('trackerEngine.js'))
    .pipe(gulp.dest('release/js'));
}

exports.default = concatJs;
