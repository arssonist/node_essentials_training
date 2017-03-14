module.exports = function(grunt) {

//---running eshint through GRUNT-----
  grunt.initConfig({
    jshint: {
// everything this is JS in these folders
      files: ["*.js", "lib/*.js", "test/*.js"],
//add options,make these true so they work
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};
