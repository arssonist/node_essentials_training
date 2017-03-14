module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		less: {
			production: {
				files: {
					"public/css/style.css": ["less/*.less"]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: "public/css/style.css",
				dest: "public/css/style.css"
			}
		},
//what to package up for the client
    browserify: {
      client: {
//when this file requiries modules, it will be auto packaged
        src: ["app-client.js"],
//where we want it to end up
        dest: "public/js/bundle.js"
      }
    }
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-browserify");

	grunt.registerTask("css", ["less", "autoprefixer"]);
//set up a js task using browserify
  grunt.registerTask("js", ["browserify"]);

//add the js to the default
	grunt.registerTask("default", ["jshint", "css", "js"]);
};
