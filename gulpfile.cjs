// Core Gulp functions
const { src, dest, series, parallel, watch } = require('gulp');

// BrowserSync for dev server and hot reloading
const browserSync = require('browser-sync').create();

// File deletion
const { deleteAsync } = require('del');

// HTML minification
const htmlmin = require('gulp-htmlmin');

// CSS processing
const cleanCSS = require('gulp-clean-css');
const postCSS = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');
const purgecss = require('gulp-purgecss');

// JavaScript
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Images
const imagemin = require('gulp-imagemin');

// Utilities
const size = require('gulp-size');
const strip = require('gulp-strip-comments');

// -------------------------
// Tasks
// -------------------------

// Clean the dist folder
function clean() {
  return deleteAsync(['dist/**', '!dist']);
}

// HTML
function html() {
  return src('src/**/*.html')
    .pipe(strip())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ showFiles: true }))
    .pipe(dest('dist'));
}

// CSS
function css() {
  const plugins = [postcssNesting(), autoprefixer()];
  return src('src/css/**/*.css')
    .pipe(postCSS(plugins))
    .pipe(cleanCSS())
    .pipe(size({ showFiles: true }))
    .pipe(dest('dist/css'));
}

// Remove unused CSS
function purge() {
  return src('dist/css/**/*.css')
    .pipe(
      purgecss({
        content: ['dist/**/*.html'],
      }),
    )
    .pipe(dest('dist/css'));
}

// JS
function js() {
  return src('src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(size({ showFiles: true }))
    .pipe(dest('dist/js'));
}

// Images
function images() {
  return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(size({ showFiles: true }))
    .pipe(dest('dist/images'));
}

// BrowserSync dev server
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  watch('src/**/*.html', html).on('change', browserSync.reload);
  watch('src/css/**/*.css', css).on('change', browserSync.reload);
  watch('src/js/**/*.js', js).on('change', browserSync.reload);
  cb();
}

// Example of dynamically importing an ESM module (optional)
async function dynamicESMTask() {
  const mod = await import('./scripts/build.mjs');
  return mod.build();
}

// -------------------------
// Export tasks
// -------------------------
exports.clean = clean;
exports.html = html;
exports.css = css;
exports.purge = purge;
exports.js = js;
exports.images = images;
exports.serve = serve;
exports.dynamicESMTask = dynamicESMTask;

// Default build task
exports.build = series(clean, parallel(html, css, js, images), purge);
