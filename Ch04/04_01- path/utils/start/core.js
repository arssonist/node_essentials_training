var path = require('path');
var util = require('util')
var v8 = require('v8')
// get the current file name path
console.log(path.basename(__filename))


//join names of dirs onto the current path name
var dirUploads = path.join(__dirname,'dir1,', 'dir2', 'dir3')

//add times and date to log
util.log(dirUploads)

util.log(v8.getHeapStatistics())
