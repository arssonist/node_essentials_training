var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
//body-parser parses data posted to this through REST, it'll be JSON
 // -forms are send url enccoded, so we need parser
var app = express();
// --------------model---------------------
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];
// -------------functions-----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));//replaces them int the req object


app.use(function(req, res, next) {
	console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

//---------------routes-----------------
// Routing- all the routes themselves do is make the call, the logic for the funcionality still needs to be included

// *********GET***************
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});
// *********POST***************
app.post("/dictionary-api", function(req, res){
  //push new data into model
  skierTerms.push(req.body);
  //respond with the new array including new term
  res.json(skierTerms)
});
// *********DELETE***************

// -adds the term to the end of the url
app.delete("/dictionary-api/:term",function(req,res){
  // req.params.term- where the value of the term is stored
  skierTerms = skierTerms.filter((definition) => {

// ***Very fancy filter function/////

    return definition.term.toLowerCase() !== req.params.term.toLowerCase()

// Works? - when clicked, the term becomes a req.params.term and then compares to original array, returning, and thereby deleting, only the terms were sent by a routing params - this happens when we clicked

   })
   res.json(skierTerms )
})


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
