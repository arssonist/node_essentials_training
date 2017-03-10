
// var socket = io("http://localhost:3000");
//
// socket.on("disconnect", function() {
// 	setTitle("Disconnected");
// });
//
// socket.on("connect", function() {
// 	setTitle("Connected to Cyber Chat");
// });
//
// socket.on("message", function(message) {
// 	printMessage(message);
// });

//add http server, not the socket server
var socket = io("http://localhost:3000");

// when disconnect, callback
socket.on("disconnect", function(){
  setTitle("Disconnected");


});
// when a connection occurs, callback
socket.on("connected", function(){
  setTitle("Connected to Web Socket Cyber Chat ");

});

socket.on("message", function(message){
  printMessage(message);

});




document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
