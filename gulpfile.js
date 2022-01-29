import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import sourcemap  from 'gulp-sourcemaps';
import pkg from 'gulp';
const {src, series, parallel, dest, watch} = pkg;
import cleanCSS from 'gulp-clean-css';


const jsPath = './src/public/scripts/*.js';
const cssPath = './src/public/styles/*.css';

function copyHTML(){
    return src('./src/public/index.html').pipe(gulp.dest('dist'));
}

function imgOpt(){
    return src('./src/public/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
};

function gifOpt(){
    return src('./src/public/gif/*').pipe(imagemin()).pipe(gulp.dest('dist/gif'));
};

function jsTask(){
    return src(jsPath)
    .pipe(sourcemap.init())
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(dest('dist/bundle.js'));
};

function cssTask(){
    return src(cssPath)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/style'));
}

/*function cssTask(){
    return src(cssPath)
    .pipe(sourcemap.init())
    .pipe(concat('style.js'))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemap.write('.'))
    .pipe(dest('dist'));
};*/

function watchTask(){
    watch([cssPath,jsPath],{interval:1000},parallel(cssTask,jsTask));
}
const build = series(parallel(copyHTML, imgOpt, gifOpt,jsTask,cssTask),watchTask);
//exports.default = series(parallel(copyHTML, imgOpt, gifOpt,jsTask,cssTask).watchTask);
//module.exports = {build};
export default build;