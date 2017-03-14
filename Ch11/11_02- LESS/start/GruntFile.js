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
// specify where less is, and where css will go
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
		}
//     autoprefixer: {
//       single_file: {
// //run autoprefixer reexport the the syles file with prefixes
//         src: "public/css/style.css",
//         dest: "public/css/style.css"
//       }
//     }
	});

// task running commands
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-autoprefixer");
//when we run CSS, we want Grunt to run less
//also autoprefixer from the css
  grunt.registerTask("css", ["less", "autoprefixer"]);

	grunt.registerTask("default", ["jshint", "css"]);
};
