module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    sass: {                                 // Task
        dist: {                             // Target
            files: {                        // Dictionary of files
                'css/main.css': 'sass/main.scss'     // 'destination': 'source'
            }
        },
        dev: {                              // Another target
            options: {
	            style: 'compressed',                      // Dictionary of render options
                includePaths: [
                    'sass/','base/', 'helpers/', 'framework', 'modules/', 'theme/', 'vendor/'
                ]
            }

        }
    },
    uglify: {
	    build: {
	        src: 'js/site.js',
	        dest: 'js/site.min.js'
	    }
	},
	imagemin: {
		dynamic: {
		    files: [{
		      expand: true,
		      cwd: 'img/',
		      src: ['**/*.{png,jpg,gif}'],
		      dest: 'img/'
		    }]
		  }
	},
	cssmin: {
	  minify: {
	    expand: true,
	    cwd: 'css/',
	    src: ['main.css', '!main.min.css'],
	    dest: 'css/',
	    ext: '.min.css'
	  }
	},
	concat: {
	  js: {
	    src: [
	      'js/classie.js',
	      'js/vendor/jquery.menu.js',
	      'js/vendor/jquery.typer.js',
	      'js/vendor/headhesive.min.js',
	      'js/vendor/raphael.js',
	      'js/vendor/jquery.lightbox_me.js',
	      'js/vendor/grid.js',
	      'js/vendor/jquery.easing.1.3.js',
	      'js/vendor/jquery.jscrollpane.min.js',
	      'js/vendor/jquery.masonry.min.js'
	    ],
	    dest: 'js/application.min.js'
	  }
	}
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default', ['sass', 'uglify', 'imagemin', 'cssmin', 'concat']);

};