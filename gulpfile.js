var gulp = require('gulp'),
    gutil = require('gulp-util'), //Usefull for loging errors
    concat = require('gulp-concat'), //conbines files
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush')
    ;

//create variables
var env, jsSources, sassSources, htmlSources, outputDir;

//output directory
outputDir = './';


//Js file sources
jsSources = [
  'components/scripts/vendor/*.js',
  'components/scripts/*.js'
];

//html and sass sources
htmlSources = [outputDir + '**/*.html'];
sassSources = ['components/sass/style.scss'];


//Tasks Begin
gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('styles', function() {
  gulp.src(sassSources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src('**/css/*.css')
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

gulp.task('images', function() {
  gulp.src('components/images/**/*.*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    use: [pngcrush()]
  }))
  .pipe(gulp.dest(outputDir + 'images'))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['styles']);
  gulp.watch(htmlSources,['html']);
  gulp.watch('**/css/*.css',['css']);
  gulp.watch('components/images/**/*.*',['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('default', ['html', 'styles', 'css', 'js', 'images', 'connect', 'watch']);