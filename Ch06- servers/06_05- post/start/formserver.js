var http = require('http');
var fs = require('fs');


http.createServer((req,res) => {

// this is the browser asking of the form, not the submission
  if (req.method === 'GET'){
    res.writeHead(200, {"Content-Type":"text/html"});
    // pipe the steam to response, which is what is in the browser
    fs.createReadStream("./public/form.html", "UTF-8").pipe(res)

  } else if (req.method === 'POST'){
    var body = "";

//create a body and collect chunks that will make up the incoming data
    req.on("data", (chunk) => {
      body += chunk;
    });
//after the body is complete, send headers
    req.on("end", function() {
      res.writeHead(200, {"Content-Type":"text/html"});

//this is doing somethign with the response data, the body
//here making it into a form and sending it back to the browser
      res.end(`
        <!DOCTYPE html>
          <head>
            <title>Form Results</title>
          </head>
          <body>
            <h1>Your Form Results</h1>
            <p>${body}</p>
          </body>
        </html>
      `);
      });

    }

}).listen(3000)

console.log("Form Server is listening on port 3000")
