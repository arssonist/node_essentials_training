var questions = [
  "What is your name?",
  "What is your age?",
  "What is your fave color?"
];

var answers = [];

function ask(i){
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write(" >  ");
}

process.stdin.on('data', function(data){
// echo answer back to U
  // process.stdout.write('\n' + data.toString().trim() + '\n');

  answers.push(data.toString().trim());

  if(answers.length < questions.length){
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit',function(){
  process.stdout.write("\n\n\n\n");

  process.stdout.write(`Hi ${answers[0]}, your color is ${answers[2]} and you are ${answers[1]} years old`)

  process.stdout.write("\n\n\n\n");
})

ask(0);
