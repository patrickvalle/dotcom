const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const inlineSource = require('gulp-inline-source');
const cssInlineImages = require('gulp-css-inline-images');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const src = 'assets';
const dist = 'dist';

gulp.task('clean', function () {
  return del(dist);
});

gulp.task('copy', () => {
  return gulp.src([src + '/**/*']).pipe(gulp.dest(dist));
});

gulp.task('inline-sources', () => {
  return gulp.src(dist + '/*')
    .pipe(inlineSource({
      attribute: false
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('inline-css-images', () => {
  return gulp.src(dist + '/css/*')
    .pipe(cssInlineImages({
      webRoot: src,
      path: '/images'
    }))
    .pipe(gulp.dest(dist + '/css'));
});

gulp.task('minify-css', () => {
  return gulp.src(dist + '/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist + '/css'));
});

gulp.task('minify-html', () => {
  return gulp.src(dist + '/*')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

gulp.task('minify-images', () => {
  return gulp.src(dist + '/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest(dist + '/images'));
});

gulp.task('build', gulp.series(
  'copy', 
  gulp.parallel('minify-css', 'minify-html', 'minify-images'),
  'inline-css-images',
  'inline-sources'
));
