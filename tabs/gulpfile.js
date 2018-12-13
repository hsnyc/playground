var gulp = require('gulp'),
    connect = require('gulp-connect')
    ;

//create variables
var jsSources, outputDir;

//output directory
outputDir = './';

//Js file sources
jsSources = [
  '**/js/*.js'
];

//html and sass sources
// htmlSources = [outputDir + '**/**/*.html'];

//Tasks Begin
gulp.task('html', function() {
  gulp.src('**/*.html')
  .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src('**/css/*.css')
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('**/*.html',['html']);
  gulp.watch('**/css/*.css',['css']);
});

gulp.task('connect', function() {
  connect.server({
    name: 'Tabs',
    root: outputDir,
    port: 8008,
    livereload: true
  });
});

gulp.task('default', ['html', 'css', 'js', 'connect', 'watch']);