//Thank you: https://barker.codes/blog/how-to-minify-javascript-and-css-files-using-gulp#:~:text=%20How%20to%20minify%20JavaScript%20and%20CSS%20files,npm%20to%20install%20a%20few%20packages...%20More%20
// and thank you: htmlmin is a package

// Require the npm modules we need
var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleanCSS = require("gulp-clean-css"),
    terser = require("gulp-terser");
    htmlmin = require("gulp-htmlmin");

// Looks for a file called styles.*.css inside the src directory
// Copies and renames the file to styles.min.css
// Minifies the CSS
// Saves the new file inside the docs directory
function minifyCSS() {
  return gulp.src("./docs/styles.*.css")
    .pipe(rename("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./docs"));
}

// Looks for a file called *.js inside the docs directory
// Minifies the JS
// Saves the new file inside the docs directory
function minifyJS() {
  return gulp.src("./docs/*.js")
    .pipe(terser())
    .pipe(gulp.dest("./docs"));
}

// Looks for any HTML files
// Removes any whitespace and comments
// Then puts them into the destination folder
function minifyHTML() {
  return gulp.src("./docs/index.html")
    .pipe(rename("index.min.html"))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./docs"));
}

// Makes these functions available as a single default task
// The three functions will execute asynchronously (in parallel)
// The task will run when you use the gulp command in the terminal
exports.default = gulp.parallel(minifyCSS, minifyJS, minifyHTML);