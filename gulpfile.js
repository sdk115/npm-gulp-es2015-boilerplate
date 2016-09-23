var gulp = require("gulp"),
  babelify = require("babelify"),
  browserify = require("browserify"),
  connect = require("gulp-connect"),
  source = require("vinyl-source-stream")

// Default task.
gulp.task("default",["build", "startServer"]);

// Convert ES6 to ES5 all js files in entries and copy to build folder.
gulp.task("build", function(){
    return browserify({
        entries: ["./index.js"],
        standalone: 'yourprojectname'
    })
    .transform(babelify.configure({
      presets: ["es2015"],
    }))
    .bundle()
    .pipe(source("projectname.js"))
    .pipe(gulp.dest("./build"))
    .pipe(gulp.dest("./example"))
    ;
});

//Start a example server
//http://localhost:9001
gulp.task("startServer", function(){
    connect.server({
        root : "./example",
        livereload : true,
        port : 9001
    });
});
