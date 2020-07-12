// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const browserSync = require('browser-sync').create();


//create variables
const files = {
  htmlPath: ['**/*.html', '!node_modules/**'],
  cssPath: ['**/*.css', '!node_modules/**'],
  jsPath: ['**/*.js', '!node_modules/**']
}

/*  Globs */
//  'scripts/**/*.js'
/*  will match files like scripts/index.js, scripts/nested/index.js, and scripts/nested/twice/index.js */

/*  Negative globs can be used as an alternative for restricting double-star globs. */
//  ['**/*.js', '!node_modules/**']
/*  https://gulpjs.com/docs/en/getting-started/explaining-globs */


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
  //start BrowserSync server
  server();

  //now watch each file
  watch(files.htmlPath).on('change', browserSync.reload);
  watch(files.cssPath).on('change', browserSync.reload);
  watch(files.jsPath).on('change', browserSync.reload);
}

// https://www.browsersync.io/docs/options#option-server
function server() {
  browserSync.init({
    server: {
        baseDir: './',
        directory: true
    },
    /* 
    Open in specific browser
    (On MacOS check Applications folder for name of app) */
    browser: "FirefoxDeveloperEdition",
    port: 8080 //<-- changing default port (default:3000);
    //open: false //<-- enable to prevent opening browser
  });
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task

exports.default = watchTask;

//Server can be started here or in Watch Task
// exports.build = server();