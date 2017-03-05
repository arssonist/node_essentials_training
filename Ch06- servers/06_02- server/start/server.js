var http = require('http')


// callback reponsible for the functionality
var server = http.createServer(function(req,res){

// writing headers- 200 status okay, JS literal giving info about info being sent
  res.writeHead(200, //{"Content-Type":"text/plain"})
  {"Content-Type":"text/html"})

//is used after reponse and headers have been sent to server
  res.end(`<!DOCTYPE html>
  <html>
    <head>
      <title>HTML Response</title>
    </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
  </html>`
  );

});
server.listen(3000);

console.log("server is listening")
