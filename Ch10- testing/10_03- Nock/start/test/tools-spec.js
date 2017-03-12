  var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock")

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			  var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});
	describe("loadWiki()", function() {

		//add before - callback will run b4 every test in suite
    before(function(){
      //use nock with a domain name, and type of request- fake server
      //add a reply after request
        nock("https://en.wikipedia.org")
        .get("/wiki/Abraham_Lincoln")
        .reply(200, "Mock Abraham Lincoln Page");
    });

		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				// expect(html).to.be.ok;
				expect(html).to.equal("Mock Abraham Lincoln Page");
				done();
			});

		});

	});

});
