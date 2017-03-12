var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function(){

  describe("printName()", function() {

    it("should print the last name first", function() {

      var results = tools.printName({ first: "Alex", last: "Banks"});

      expect(results).to.equal("Banks, Alex");

    });

  });

  describe("loadWiki()", function() {
    it ("Load Abraham's page", function(done){

      tools.loadWiki({ first:"Abraham", last:"Licoln"}, function(html){

        expect(html).to.be.ok;
        done();
      })
    });
  })
});
