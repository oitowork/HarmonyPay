module.exports = function(grunt) {

	// Configuration
	grunt.initConfig({
		sass: {
    		dist: {
     			options: {
        			style: 'nested',
        			precision: 5,
    			},
      			files: {
        			'src/static/css/mycryptocheckout.css': 'src/static/css/scss/mycryptocheckout.scss',
      			}
    		}
		},
		autoprefixer:{
			options: {
  				browsers: ['last 10 versions']
			},
    		dist:{
        		files:{
          			'src/static/css/mycryptocheckout.css':'src/static/css/mycryptocheckout.css'
        		}
      		}
    	},
		watch: {
  			scripts: {
				files: ['src/static/css/scss/*.scss'],
				tasks: ['sass', 'autoprefixer'],
  			},
		},
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Tasks
	grunt.registerTask('compile-sass', ['sass']);
	grunt.registerTask('prefix-css', ['autoprefixer']);
	
	// Run All Tasks
	grunt.registerTask('all', ['compile-sass', 'prefix-css']);

};