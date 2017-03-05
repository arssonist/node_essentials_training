var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');

var Dog = {
  name:'',
  breed:'',
  barkings:[]
};

rl.question("What is the name of the dog?", function(answer){
  Dog.name = answer;
});

rl.setPrompt(`What is the breed of ${Dog.name}?`);

// rl.setPrompt(`What kind of barks would ${Dog.name} make?`);
//
rl.prompt();

rl.on('line', function(barking){
  Dog.barkings.push(barking.trim());
});
