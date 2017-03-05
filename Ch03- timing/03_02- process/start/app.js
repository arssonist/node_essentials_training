
console.log(process.argv.slice(2))
// //
// function grab(flag){
//   var index = process.argv.indexOf(flag);
//   return (index === -1) ? null : process.argv[index+1];
// }
// console.log(grab("text"))
// //
// var greeting = grab('--greeting');
// console.log(greeting)
// var user = grab('--user');
//
// if (!user || !greeting) {
//   console.log("You Blew it!");
// } else {
//   console.log(`Welcome ${user}, ${greeting}`);
// }


function checkIndex(input){
  var index = process.argv.indexOf(input);
  console.log(index)
}
// //
//
// var test = checkIndex('--  ')
