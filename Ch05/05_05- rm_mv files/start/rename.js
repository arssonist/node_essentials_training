var fs = require("fs");


//renaming sync
fs.renameSync('./lib/project-config.js', './lib/config.json')

console.log("file renamed")

//moving asyncs
fs.rename('./lib/notes.md', './notes.md', function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Notes moved")
  }
})
