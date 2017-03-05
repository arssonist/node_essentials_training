var http = require('http');
var fs = require('fs');
var path = require('path');


//no instance needed, just and open server
http.createServer(function(req,res){

  console.log(`${req.method} request for ${req.url}`)

//if req is homepage-
  // serve index file with fs.readFile(path)
  if (req.url === "/") {


//-----------HOME PAGE ---------------
// after file is read, then the callbacj fires and response is sent
    fs.readFile("./public/index.html", "UTF-8", function(err, html){

// this is reponse
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(html);
    });


// -------------CSS-----------------------
// use the match(regex) method - check if the reuest url matches ENDS WITH css
  } else if (req.url.match(/.css$/)){
// above use fs.readFile, but here we will use stream

// create a path to the file
      var cssPath = path.join(__dirname, 'public', req.url);

//create the stream using the created path
      var fileStream = fs.createReadStream(cssPath, "UTF-8")

//if succesful then write header and status
      res.writeHead(200, {"Content-Type":"text/css"});
//use  PIPE, to pipe the read stream back into the response
      fileStream.pipe(res)

// -----------------JPEG----------------------
  } else if (req.url.match(/.jpg$/)){
    var imgPath = path.join(__dirname, 'public', req.url);

// img does not use UTF-8, as it's binary
    var imgStream = fs.createReadStream(imgPath);

    res.writeHead(200, {"Content-Type":"image/jpeg"})

    imgStream.pipe(res);


// -------------404-----------------------
    // if not homepage, return headers that respond with 404
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 file not found")

  }

}).listen(3000); //server req


console.log("File Server is running on port 3000")
