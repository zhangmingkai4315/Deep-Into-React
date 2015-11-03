var gulp=require('gulp'),
    connect=require('gulp-connect'),  //server
    open=require('gulp-open'),         //open browser
    concat=require('gulp-concat'),
    browserify=require('gulp-browserify'),
    port=process.env.port||3000;


gulp.task("browserify",function () {
  gulp.src('./app/js/main.js')
  .pipe(browserify({transform:'reactify'}))
  .pipe(gulp.dest('./app/dist/js/'));
});

gulp.task('open',function () {
  var options={
    url:'http://localhost:'+port
  };
  gulp.src('./app/index.html').
  pipe(open('',options));
});

gulp.task("connect",function () {
  connect.server({
    root:'app',
    port:port,
    livereload:true
  });
});

gulp.task("js",function () {
  gulp.src("./app/dist/**/*.js").pipe(connect.reload());
});

gulp.task('html',function () {
  gulp.src('./app/*.html').pipe(connect.reload());
});

gulp.task('watch',function () {
  gulp.watch('app/dist/js/*.js',['js']);
  gulp.watch('app/index.html',['html']);
  gulp.watch('app/js/**/*.js',['browserify']);
});

gulp.task('default',['browserify']);

gulp.task('server',['browserify','connect','open','watch']);
