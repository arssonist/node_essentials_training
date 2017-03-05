var fs = require('fs');


// move dir
// try {
//   fs.renameSync("./assets/logs", "./logs")
//   console.log("moved!")
// } catch (e) {
//   console.log(e)
// }

//remove dir that is empty
// fs.rmdir("./assets", function(err){
//     if (err){
//     throw err; //throw err. not log
//     }else {
//     console.log("removed")
//   }
// })

//this is not emprytu  
fs.rmdir(".logs", function(err){
    if (err){
    throw err; //throw err. not log
    }else {
    console.log("removed")
  }
})
