module.exports = function(grunt){


	// Project configuration.
	grunt.initConfig({
		concat: {
			dist: {
				src: ['js/test1.js', 'js/test2.js'],
				dest: 'dist/built.js',
			},
		},
		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false,
				},
			},
		},
	});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('hello', function(){
		console.log("I am speaking");
	});
}