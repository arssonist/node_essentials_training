var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

function writeWaitingPercent(p){
//clearLine does what it says
  process.stdout.clearLine();
//cursorTo moves cursor
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting...${p}%`)
}

// node function setInterval  fires code at MS posted
var interval = setInterval(function(){
  currentTime += waitInterval;
// put setInterval in a var
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  writeWaitingPercent(percentWaited);

}, waitInterval);


// node function setTimeout is to stop setInterval
setTimeout(function() {
  // node function clearInterval takes the instance and stops intervals
  clearInterval(interval);
  writeWaitingPercent(100);
 console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
