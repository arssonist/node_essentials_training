var fs = require('fs');
var path = require('path');

///////////////////// synchronously files
// var contents = fs.readFileSync('sayings.md', "UTF-8");
//
// console.log(contents)

/////////////////////// ansync files
// fs.readFile('./lib/sayings.md','UTF-8', function(err, contents){
//   if(err){
//   console.log(err);
//   }
//   console.log(contents)
// });


/////////paths/dirs.stats

// readdir with the callback give the files, then the files can be looped with forEach
fs.readdir("./lib", function(err, files){

  files.forEach(function(fileName){
// file= path.join and __dir, and filename gives returns all the paths
    var file = path.join(__dirname, "lib", fileName);
    // fs.statSync gets stats info
    var stats = fs.statSync(file);
    if(stats.isFile() && fileName !== ".DS_STORE") {

      fs.readFile(file, "UTF-8", function(err, contents){
        console.log(contents )
      })
    }
  })
})
