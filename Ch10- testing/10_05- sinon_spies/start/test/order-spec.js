var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");

var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];
//add sinon spie to add a console log
    this.console = {
      log: sinon.spy()
    }

		order.__set__("inventoryData", this.testData);


//use rewire to inject the fake cosole into order- SUT
    order.__set__("console", this.console);
	});

	it("order an item when there are enough in stock", function(done) {
//place this in variable to use inside of other function
    var _this = this;

		order.orderItem("CCC", 3, function() {
// check that console log has been called twice by this point
      expect(_this.console.log.callCount).to.equal(2)

			done();
		});

	});

});
