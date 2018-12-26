const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const fontmin = require('gulp-fontmin');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

const from = {
  css: 'css/*',
  font: 'fonts/*',
  html: 'index.html',
  image: 'images/*'
};

const to = {
  css: 'dist/css/',
  font: 'dist/fonts/',
  html: 'dist/',
  image: 'dist/images/'
};

gulp.task('minify-css', () => {
  return gulp.src(from.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest(to.css));
});

gulp.task('minify-fonts', () => {
  return gulp.src(from.font)
    .pipe(fontmin())
    .pipe(gulp.dest(to.font));
});

gulp.task('minify-html', () => {
  return gulp.src(from.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(to.html));
});

gulp.task('minify-images', () => {
  return gulp.src(from.image)
    .pipe(imagemin())
    .pipe(gulp.dest(to.image));
});

gulp.task('build', gulp.parallel('minify-css', 'minify-fonts', 'minify-html', 'minify-images'));
