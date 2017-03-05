var express = require('express')

//to create an intstance
var app = express();

//express will run this middleware, then after, proceed to the next that we set

// return info about server req in the terminal 
app.use(function(req,res,next){
  console.log(`${req.method} request for ${req.url}`)
  next();
});

//express static is middleware for static server
app.use(express.static("./public"))


app.listen(3000)

console.log("Express App running on port 3000")

module.exports = app;
