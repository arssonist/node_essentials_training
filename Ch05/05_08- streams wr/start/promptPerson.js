// -Uses both the rl and streams.
// -rl sets up the prompts and saves the saying to an array

// WORKFLOW OF RL
// -uses rl.question to ask oringinal question, and store answer
// -uses rl.setPrompt to combine the answer from that with another question
// -use rl.prompt to wait to take in user answer
// -uses rl.on to deal with the answer after the user pushes enter.

// WORKFLOW OF STREAM
// - use fs.createWriteStream to create stream, and make a file.
// - uses stream.write to write to the file
// - uses stream.close to end the streaming to file.

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;
//create a stream
  var stream = fs.createWriteStream(realPerson.name + ".md")
//use .write to write to the stream
  stream.write(`${realPerson.name}\n==================\n\n`)

	rl.setPrompt(`What would ${realPerson.name} say?`);

	rl.prompt();

	rl.on('line', function(saying) {


		// fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);

  //if the saying is Exit, then exit
		if (saying.toLowerCase().trim() === 'exit') {
      stream.close()
      rl.close();

//else proceed with the stream
		} else {

      realPerson.sayings.push(saying.trim());

      stream.write(`* ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);

       rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
