const gulp= require('gulp'),
	 sass= require('gulp-sass'),
	 autoprefixer= require('gulp-autoprefixer');
    pug= require('gulp-pug');

	 gulp.task('sass', ()=>
	 	gulp.src('./scss/*.scss')
	 		.pipe(sass({
	 			outputStyle: 'nested'
	 		}))
	 		.pipe(autoprefixer({
 				versions: ['last 2 browers']
 			}))
	 		.pipe(gulp.dest('./css'))
	 );


     gulp.task('pug',()=>
        gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./html'))
    );

    gulp.task('default',()=>{
         gulp.watch('./scss/*.scss',['sass']);
        gulp.watch('./pug/*.pug',['pug']);
    });