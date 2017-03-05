var fs = require('fs');

var md = `

Sample Markdown Title
====================

Sample  Subtitle
--------------------

* point
* point
* point

`;

//running this script makes the above into a file
fs.writeFile("sample.md", md.trim(), function(err){
  console.log("created")
})
