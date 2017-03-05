var fs = require("fs");


try {
  fs.unlinkSync("./lib/config.json");
} catch (e) {
   console.log(e);
}

fs.unlink("notes.md", function(err){
  if (err){
    console.log(err)
  }else {
    console.log("notes removed")
  }
});
