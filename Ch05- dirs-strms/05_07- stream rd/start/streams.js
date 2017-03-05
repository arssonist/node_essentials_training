var fs = require('fs')


// normal readFile asncy with blocking
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
//   console.log(chatlog.length)
// })

// - create the stream
var stream = fs.createReadStream("./chat.log", "UTF-8")

// - create an event to listen in on chunks of stream using "data" event listener
var data = "";

stream.once("data", function(){

  console.log("\n\n\n\n")
  console.log("Started Reading Files")
  console.log("\n\n\n\n\n")

});
stream.on("data", function(chunk){
// -  write the chunks
  process.stdout.write( `chunk : ${chunk.length} |`);

  data += chunk;
});

stream.on("end", function(){

  console.log("\n\n\n\n")
  console.log("Finished Reading Files")
  console.log("\n\n\n\n\n")


})
