// // Using EventEmitter with a listner, and then constructing an instance
//
// var events = require('events')
//
// // events module creates new instance of Events Emitter
// var emitter = new events.EventEmitter();
//
// //ON-  wire up a custom event (name, callback(message, status))
// emitter.on('customEvent', function(message, status){
//   console.log(`${status}: ${message}`)
// });
//
// //fires the custom event
// emitter.emit('customEvent', "Hello World", 200);


// Using the EventEmitter direcetly, pulling the constructor out of events module

// Using utils module to inherit into prototype


var EventEmitter =
require('events').EventEmitter;
var utils = require('util');

var Person = function(name) {
  this.name = name;
}

utils.inherits(Person, EventEmitter);


// has inherited EventEmitter
var ben = new Person("Ben Franklin")

ben.on('speak', function(said){
  console.log(`${this.name}: ${said}`)
});

ben.emit('speak', "blah blah blah")
