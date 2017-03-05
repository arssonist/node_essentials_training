var readline = require('readline')

//use readline to make interfaces
var rl = readline.createInterface(process.stdin, process.stdout);

// question is used to question and answer
// rl.question("what is a word?", function(answer){
//    console.log(answer)
// });


var realPerson = {
  name:'',
  sayings: []
};

//rl.setPrompt, sets a prompt which can then be called by .prompt
rl.question("What is the name of the person? ", function(answer){
//sets the answer here to the name NOTE: this is not a prompt
  realPerson.name = answer;

  rl.setPrompt(`What would the ${realPerson.name} say? `);

  rl.prompt();

  rl.on('line', function(saying){

    realPerson.sayings.push(saying.trim());
//TO QUIT= if the person types 'exit', then it calls closes
    if(saying.toLowerCase().trim() === 'exit'){
      rl.close();
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
      rl.prompt();
    }

  });
});
//%s string place holder- realPerson.name will be put here
//%j json holder - realPerson.sayings here.
  rl.on('close', function(){
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings)
    process.exit()

  });
