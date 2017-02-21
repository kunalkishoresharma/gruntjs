module.exports= function(grunt){
    grunt.registerTask('speak',function(){
        console.log('hi i am speaking')
    });
	grunt.registerTask('write',function(){
		console.log('I am writing')
	});
   // grunt.registerTask('default',['speak','write'])

	
	grunt.initConfig({
		concat:{
			js: {
			  src: ['js/js1.js', 'js/js2.js'],
			  dest: 'build/js/script.js',
			},
	       css: {
			  src: ['css/theme.css', 'css/style.css'],
			  dest: 'build/css/styles.css',
			},
		},
        watch: {
          js: {
            files: ['js/**/*.js'],
            tasks: ['concat'],
          },
         css: {
            files: ['css/**/*.css'],
            tasks: ['concat'],
          },
        },
        
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch'])

}