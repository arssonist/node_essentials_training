var http = require('http');

var data = require("./data/inventory")

http.createServer(function(req, res){

  if (req.url === '/'){
    res.writeHead(200, {"Content-Type":"text/json" });
      res.end(JSON.stringify(data));
  } else if (req.url === '/instock'){
    listInStock(res);
  } else if (req.url === '/onorder'){
    listOnBackOrder(res);
  } else {
    res.writeHead(404, {"Content-Type":"text/plain"})
    res.end("Data not found")
  }

///if user hits server, content will be returned directly

  //sending data back with .end, use JSON.stringify to send back a string
  res.end(JSON.stringify(data));

}).listen(3000)

console.log("listening on port 3000")


  function listInStock(res){
    // store results of the filer in a variable
    var inStock = data.filter(function(item){
      return item.avail === "In stock";
// "text" must match JSON exactly
    })

    res.end(JSON.stringify(inStock))
  }
  function listOnBackOrder(res){
    var onOrder = data.filter(function(item){
      return item.avail === "On back order";
    })

    res.end(JSON.stringify(onOrder))
  }
