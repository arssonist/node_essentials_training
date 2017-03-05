var fs = require('fs')

fs.mkdir("lib", function(err) {
  if (err){
  console.log(err);
} else {
  console.log('dir created')
}
});
