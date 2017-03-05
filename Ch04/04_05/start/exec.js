var exec = require("child_process").exec

// opens browser
// exec("open http://www.linkedin.com");
// // opens terminal
// exec("open -a Terminal .")

// gets the ls from the terminal a returns them
exec("ls", function(err, stdout){
  if (err){
    throw err;
  }

  console.log("Listing Done")
  console.log(stdout)
})
