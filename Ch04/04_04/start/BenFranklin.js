var Person = require(".lib/Person")

var ben = new Person("Ben Franklin");

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
