var express = require("express");
var http = require("http");
var app = express();

//send server express app, rather than callback; makes server based on express app.
var server = http.createServer(app).listen(3000);

//this is function that takes in server as an argument
var io = require("socket.io")(server);

//serve the pubic folder
app.use(express.static("./public"));

// io listens for connection and takes socket in callback
io.on("connection", function(socket) {

//when chat event on client occurs, broadcasts,emit to all connected sockets
    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });

//when it connects, the emit fires
	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");
