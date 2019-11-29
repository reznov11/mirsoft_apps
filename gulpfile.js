let gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  minifyCss = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  autoprefixer = require("gulp-autoprefixer"),
  rename = require("gulp-rename"),
  del = require("del"),
  changed = require("gulp-changed");

const SCSS_SRC = "./src/env/scss/**/*.scss",
  SCSS_DEST = "./src/env/css";

gulp.task("clean", async function() {
  del.sync("dist");
});

gulp.task("clean", async function() {
  del.sync("dist");
});

gulp.task("scss", function() {
  return gulp
    .src(SCSS_SRC)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        browsers: ["last 8 versions"]
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(SCSS_DEST))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("export", function() {
  let BuildCss = gulp.src("env/css/**/*.css").pipe(gulp.dest(SCSS_DEST));
});

gulp.task("watch", function() {
  gulp.watch(SCSS_SRC, gulp.parallel("scss"));
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./src/env/"
    }
  });
});

gulp.task("build", gulp.series("clean", "export"));

gulp.task("default", gulp.parallel("scss", "browser-sync", "watch"));
