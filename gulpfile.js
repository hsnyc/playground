var gulp = require('gulp'),
    connect = require('gulp-connect')
    ;

//create variables
var jsSources, htmlSources, outputDir;

//output directory
outputDir = './';

//Js file sources
jsSources = [
  'nav/js/*.js',
  'components/js/vendor/*.js',
  'components/js/*.js'
];

//html and sass sources
htmlSources = [outputDir + '**/*.html'];

//Tasks Begin
gulp.task('html', function() {
  gulp.src(htmlSources)
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
  gulp.watch(htmlSources,['html']);
  gulp.watch('**/css/*.css',['css']);
});

gulp.task('connect', function() {
  connect.server({
    name: 'Playground',
    root: outputDir,
    port: 8008,
    livereload: true
  });
});

gulp.task('default', ['html', 'css', 'js', 'connect', 'watch']);