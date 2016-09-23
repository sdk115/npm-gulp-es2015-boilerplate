var gulp = require("gulp"),
  babelify = require("babelify"),
  browserify = require("browserify"),
  connect = require("gulp-connect"),
  source = require("vinyl-source-stream")

// Default task.
gulp.task("default",["build", "startServer"]);

// Convert ES6 ode in all js files in entries and copy to build folder.
gulp.task("build", function(){
    return browserify({
        entries: ["./index.js"],
        standalone: 'instamedia'
    })
    .transform(babelify.configure({
      presets: ["es2015"],
    }))
    .bundle()
    .pipe(source("instamedia.js"))
    .pipe(gulp.dest("./build"))
    .pipe(gulp.dest("./example"))
    ;
});

//Start a example server with doc root at build folder and
//listening to 9001 port. Home page = http://localhost:9001
gulp.task("startServer", function(){
    connect.server({
        root : "./example",
        livereload : true,
        port : 9001
    });
});
