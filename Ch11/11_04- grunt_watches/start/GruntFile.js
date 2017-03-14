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
		browserify: {
			client: {
				src: ["app-client.js"],
				dest: "public/js/bundle.js"
			}
		},
//create another node for watch
    watch: {
      css: {
        files: ["less/*.less"],
        // run the tasks when files change
        tasks: ["css"]
      },
    //client side js
      scripts: {
        files: ["app-client.js", "lib/*.js"],
        task: ["hint", "browserify"]
      }
    }
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask("css", ["less", "autoprefixer"]);
	grunt.registerTask("js", ["browserify"]);

	grunt.registerTask("default", ["jshint", "css", "js"]);
};
